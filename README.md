# RC Cars App (practice project)

## Run locally
    npm install
    npm start
Open http://localhost:3000

## Endpoints
- /            -> frontend page
- /api/cars    -> JSON list of cars
- /health      -> health check

## Nginx reverse proxy (on EC2)
Add this inside the `server { }` block (e.g. /etc/nginx/sites-available/default):

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

Then: sudo nginx -t && sudo systemctl reload nginx

Keep the app running with: sudo npm i -g pm2 && pm2 start server.js --name rc-cars
