app/page.tsx    → /                         Public route
app/about/page.tsx  → /about                    Public route
app/blog/page.tsx   → /blog                     Public route
app/blog/page.tsx    → /blog                         Public route
app/blog/authors/page.tsx	-> /blog/authors         	Public route
app/blog/_components/Post.tsx	—>	 NO  routes               Not routable; safe place for UI utilities
app/blog/_lib/data.ts	—>	 NO  routes               Not routable; safe place for utils

pages/index.js → /
pages/blog/index.js  → /blog
pages/blog/index.js → /blog
pages/blog/first-post.js → /blog/first-post
pages/dashboard/settings/username.js → /dashboard/settings/username
pages/blog/[slug].js	/blog/a	{ slug: 'a' }
pages/blog/[slug].js	/blog/b	{ slug: 'b' }
pages/blog/[slug].js	/blog/c	{ slug: 'c' }

1.So in Next.js if you are wrapping a folder name with brackets this parentheses, it means it is not going to be in the URL.
Route groups and private folders
Organize code without changing URLs with route groups (group), and colocate non-routable files with private folders _folder.

Path	URL pattern	Notes
app/(marketing)/page.tsx	/	Group omitted from URL
app/(shop)/cart/page.tsx	/cart	Share layouts within (shop)
app/blog/_components/Post.tsx	—	Not routable; safe place for UI utilities
app/blog/_lib/data.ts	—	Not routable; safe place for utils


2.Dynamic routes
Parameterize segments with square brackets. Use [segment] for a single param, [...segment] for catch‑all, and [[...segment]] for optional catch‑all. Access values via the params prop.

Path	URL pattern
app/blog/[slug]/page.tsx	/blog/my-first-post
app/shop/[...slug]/page.tsx	/shop/clothing, /shop/clothing/shirts
app/docs/[[...slug]]/page.tsx	/docs, /docs/layouts-and-pages, /docs/api-reference/use-router




