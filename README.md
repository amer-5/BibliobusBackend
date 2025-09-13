# 📚 BiblioBus + Backend

Backend za **BiblioBus**, digitalnu biblioteku Travnika.  
Omogućava:
- Digitalne članske karte (QR kod)
- Rezervacije i posudbe knjiga
- Praćenje bibliobusa i rasporeda
- Administraciju kataloga knjiga i korisnika

---

## 🛠️ Tehnologije
- Node.js
- Express.js
- Prisma
- PostgreSQL
- JWT (autentifikacija)
- bcrypt (hashiranje lozinki)

---

## 🚀 Pokretanje projekta

1. Kloniraj repozitorij:
   git clone https://github.com/amer-5/BibliobusBackend.git
   cd bibliotravnik-backend

2. Instaliraj zavisnosti:
   npm install

3. Kreiraj `.env` fajl (ili koristi `.env.example`):
   DATABASE_URL=""
   JWT_SECRET=""
   PORT=3001

4. Kreiraj bazu:
   psql -U postgres
   CREATE DATABASE bibliotravnik;

5. Pokreni migracije i Prisma klijenta:
   npx prisma migrate dev --name init
   npx prisma generate

6. Pokreni server:
   npm run dev

Server radi na: http://localhost:3001

---

## 🗂️ Prisma Schema (primjer)
Datoteka: prisma/schema.prisma
Sadržaj ove datoteke nalazi se u zipu (prisma/schema.prisma).

---

## 🌐 Backend Rute (pregled)

Auth:
- POST /auth/register       — Public: registracija korisnika
- POST /auth/login          — Public: login, vraća JWT
- GET  /auth/me             — Authenticated: info o prijavljenom korisniku

Korisnici:
- GET    /users             — Admin: lista korisnika
- GET    /users/:id         — Librarian/Admin: detalji
- PATCH  /users/:id         — Librarian: update
- DELETE /users/:id         — Admin: delete

Knjige:
- GET    /books             — Public: lista knjiga / search
- GET    /books/:id         — Public: detalji knjige
- POST   /books             — Librarian: dodaj knjigu
- PATCH  /books/:id         — Librarian: update
- DELETE /books/:id         — Librarian: delete

Rezervacije:
- POST /reservations        — User: rezervacija knjige
- GET  /reservations        — User/Admin: lista rezervacija
- PATCH /reservations/:id   — Librarian/Admin: promjena statusa

Posudbe (loans):
- POST /loans               — Librarian: kreiranje posudbe (checkout)
- GET  /loans               — User/Admin: lista posudbi
- PATCH /loans/:id/return   — Librarian: vraćanje knjige

Bibliobus:
- GET    /bus-stops         — Public: lista stanica
- POST   /bus-stops         — Admin: dodaj stanicu
- PATCH  /bus-stops/:id     — Admin: update
- DELETE /bus-stops/:id     — Admin: delete
