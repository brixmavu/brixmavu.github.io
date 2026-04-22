import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.*;
import java.util.Map;

public class Server {
    static final Map<String,String> MIME = Map.of(
        ".html","text/html",".js","application/javascript",
        ".css","text/css",".json","application/json",
        ".png","image/png",".jpg","image/jpeg",".svg","image/svg+xml"
    );

    public static void main(String[] args) throws Exception {
        int port = args.length > 0? Integer.parseInt(args[0]) : 8000;
        HttpServer s = HttpServer.create(new InetSocketAddress(port), 0);

        s.createContext("/", ex -> {
            String path = ex.getRequestURI().getPath();
            if (path.equals("/")) path = "/index.html";
            File f = new File("." + path).getCanonicalFile();

            if (!f.getPath().startsWith(new File(".").getCanonicalPath()) ||!f.exists()) {
                byte[] e = "404".getBytes();
                ex.sendResponseHeaders(404, e.length);
                ex.getResponseBody().write(e);
                ex.close(); return;
            }

            String ext = path.contains(".")? path.substring(path.lastIndexOf(".")) : "";
            Headers h = ex.getResponseHeaders();
            h.set("Content-Type", MIME.getOrDefault(ext,"text/plain"));
            h.set("Access-Control-Allow-Origin","*");

            byte[] b = Files.readAllBytes(f.toPath());
            ex.sendResponseHeaders(200, b.length);
            ex.getResponseBody().write(b);
            ex.close();
        });

        s.setExecutor(null);
        s.start();
        System.out.println("[KUNINGAZ:KING] ZenServer live: http://localhost:" + port);
        System.out.println("[KUNINGAZ:VISTA HIGH JAVA] 0 deps. Serving./");
    }
}
