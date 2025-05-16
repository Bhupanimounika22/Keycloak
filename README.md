# 🛡️ Keycloak + 🐘 PostgreSQL - Auth Like a Boss

Welcome, brave developer! 👋  
You’ve just stumbled upon a mighty combo: Keycloak (a.k.a. the gatekeeper of identities) + PostgreSQL (the vault where secrets sleep).

This setup will help you run your own Keycloak server backed by a reliable Postgres database—all in the cozy world of Docker. 🐳

---

## 🧪 Prerequisites

- Docker 🐳  
- Docker Compose 📦  
- A sense of humor 😄 (optional, but recommended)

---

## 🚀 Getting Started

1. Clone this repo like you clone your crush’s Spotify playlist:

```bash
git clone https://github.com/your-username/keycloak-postgres-stack.git
cd keycloak-postgres-stack
```
2.Launch the dream team:

```bash
docker-compose up -d
```
3.Wait for the containers to rise like dough in a warm oven 🍞

4.Open your browser and visit:

```bash
http://localhost:8080
```
5. Login using the default credentials (because you're admin now, congrats! 🥳):

Username: admin

Password: admin123

6. Celebrate! 🎉 (or configure realms, clients, users… whatever suits your mood)

   ⚙️ Admin Credentials
   Component	Value
   Admin User	admin
   Admin Pass	admin123
   DB Name	keycloak
   DB User	keycloak
   DB Pass	keycloak123

(Feel free to change these in the docker-compose.yml — unless you like living on the edge 😈)
 
7.📬 Email Setup (Because emails don't send themselves)
Head to the Keycloak Admin Console:

```bash
Realm Settings → Email tab
```
Configure SMTP like you're filling out a dating profile:

SMTP Host: e.g. smtp.gmail.com

Port: 587 or 465

From: your-email@example.com

Username: your SMTP user

Password: secret sauce

Enable TLS or SSL depending on your provider

Pro tip: Use SendGrid, Gmail (with App Password), or Mailgun. 🐦

8.🧼 Stopping & Cleaning Up
Because sometimes you need to break up with your containers 💔

```bash
docker-compose down
```
To clean all volumes (dangerous! 💣):

```bash
docker-compose down -v
```
🔍 Checking the Database
Feel like spying on your Keycloak data? Sneak into Postgres like a ninja:
```bash
docker exec -it keycloak_postgres psql -U keycloak -d keycloak
```
Then run:

```bash
\dt;
SELECT * FROM user_entity LIMIT 5;
```
🧠 Fun Fact
Keycloak is like a bouncer for your app. It checks IDs, lets the cool users in, and kicks out the shady ones.

PostgreSQL? That’s the bartender who remembers everyone’s drink (aka your data). 🍹







