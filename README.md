# Kyle Cudal — Portfolio & Personal Site

A cinematic single-page site: a fullscreen video hero, then scroll down into a
cream editorial portfolio with a horizontal filmstrip, `(Title)/(Client)/(Genre)`
metadata, a **Selected / Index** toggle, and the signature **hover-to-flood-colour**
effect. No build tools, no frameworks — three files you can host anywhere for free.

```
index.html    ← page structure (rarely need to touch)
styles.css    ← all the styling (rarely need to touch)
script.js     ← ★ EDIT THE TOP OF THIS FILE — your info, links & work list
Media/        ← drop your real photos & videos here
```

---

## 1. Make it yours (5 minutes)

Open **`script.js`** and edit the block at the very top:

- **`SITE`** — your name, the **email** you want public, your footer **bio**, and your
  **links** (Instagram, YouTube, Substack, Letterboxd, Goodreads are already in).
- **`HERO`** — your fullscreen showreel video (optional; leave blank for the animated
  cinematic background).
- **`WORK`** — the list of pieces shown in the filmstrip and the Index list.

> **Set your email:** it currently reads `your@email.com` — change `SITE.email` to the
> address you want people to contact you on.

## 2. Add your photos & videos

**Important:** the site loads from **`Media/web/`** — these are compressed, web-sized
copies. Your full-size originals stay in `Media/Photos`, `Media/Video`, `Media/Me`
and are *not* used by the site (keep them, just don't link to them — a 15 MB JPEG
would make the page crawl).

To add new work, first make a web copy:

```bash
# photo → max 2000px, quality 78 (usually ~800KB)
sips -Z 2000 -s format jpeg -s formatOptions 78 "Media/Photos/NEW.jpg" --out "Media/web/new.jpg"

# video → web-ready mp4 + poster frame
ffmpeg -i "Media/Video/NEW.mov" -vf "scale=1600:-2" -c:v libx264 -crf 27 -preset slow \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k "Media/web/new.mp4"
ffmpeg -ss 1.5 -i "Media/Video/NEW.mov" -frames:v 1 -vf "scale=1920:-2" -q:v 4 "Media/web/new-poster.jpg"
```

Then point each `WORK` item at the web copy:

   ```js
   { title: "Pines", client: "Personal", genre: "Landscape · Contax T2",
     type: "photo", ratio: "portrait", color: "#8FAE86",
     img: "Media/web/contax-DSC01207.jpg", video: "" },
   ```

   - `img` — the photo (or a poster frame for a video). Leave `""` for a placeholder.
   - `video` — optional. If set, it **plays on hover** and opens in the viewer on click.
   - `type` — `"photo"` or `"film"` (film shows the little `1.00` badge).
   - `color` — **the background colour that floods in when someone hovers this item.**
     This is the signature effect — give each piece its own colour.
   - `ratio` — `"portrait"`, `"wide"`, `"landscape"`, or `"square"`.

**Showreel:** for a real hero video, set `HERO.videoSrc: "Media/showreel.mp4"`.

> Tip: keep files web-friendly — JPG/WebP images ~2000px wide, H.264 `.mp4` videos.
> Big raw files make the site slow.

## 3. Preview it on your computer

Open it through a tiny local server (not by double-clicking), so fonts and media load:

```bash
cd "/Users/kylecudal/Desktop/photography website"
python3 -m http.server 8000
```

Then open **http://localhost:8000**. Press `Ctrl+C` to stop.

## 4. Put it online (free)

- **Netlify Drop** — https://app.netlify.com/drop — drag this whole folder onto the page
  for an instant live URL. To update, drag again.

> Before deploying you can delete (or move out) `Media/Photos`, `Media/Video` and
> `Media/Me` — those are your 120 MB of originals and the site doesn't use them.
> Only `Media/web/` (~15 MB) is needed. Back the originals up somewhere first.
- **GitHub Pages** or **Vercel** also work. All three support a custom domain
  (e.g. kylecudal.com) for free later.

---

## What's on the page

- **Hero:** fullscreen video (or animated fallback) with a centred minimal nav —
  `Kyle Cudal · Info · Selected, Index · Sound On` — and a scroll cue.
- **Portfolio (Selected):** two labelled sections — **Photography** then
  **Videography** — each a horizontal filmstrip you drag or scroll sideways, with its
  own ← → arrows and a count. Items are sorted into the two sections automatically by
  their `type` (`"photo"` → Photography, `"film"` → Videography). Each item shows
  `(Title)/(Client)/(Genre)`. **Hover any item → the whole page floods with that item's
  colour** and films start playing. Click to open full-screen.
- **Index:** a centred scrolling catalogue of every piece. The title nearest the
  middle of the screen goes solid black while the rest fade; its preview (photo or
  a playing film) appears bottom-left, the medium + genre show on either side, and
  the background floods that piece's colour. Hover a title or click to enlarge.
  (Toggle "Selected / Index" top-right.)
- **Projects:** a case-study view. Each project groups several pieces (photos *and*
  films) into one story. Click a project cover → a full-screen case study opens with
  the title, Client/Role/Date/Location, a blurb, and a gallery of everything from that
  shoot (each item enlarges/plays on click). Projects are **deep-linkable** — the URL
  becomes `…/#/project/<id>`, so you can send a brand a link straight to one project.
- **Info footer:** your email, all your links, and your bio — this is the personal hub.
- Fully responsive, keyboard-accessible, respects reduced-motion.

### Adding / editing projects

In `script.js`:
1. Give the works that belong together a matching `project: "<id>"` field.
2. Add an entry to the `PROJECTS` array with that same `id`, plus title, client, role,
   date, location, a `cover` image path, and a `blurb`. That's it — the case study and
   its shareable link build themselves.

## Your links (already wired in)

Instagram · YouTube · Substack · Letterboxd · Goodreads — edit them in `SITE.links`.
