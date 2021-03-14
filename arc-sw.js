server {
    ...

    location = /arc-sw.js {
        proxy_pass https://arc.io;
    }
}
