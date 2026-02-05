//app/page.tsx    → /                         Public route
//app/about/page.tsx  → /about                    Public route
//app/blog/page.tsx   → /blog                     Public route
// app/blog/page.tsx    → /blog                         Public route
// app/blog/authors/page.tsx	-> /blog/authors         	Public route
// app/blog/_components/Post.tsx	—>	 NO  routes               Not routable; safe place for UI utilities
// app/blog/_lib/data.ts	—>	 NO  routes               Not routable; safe place for utils

// pages/index.js → /
// pages/blog/index.js  → /blog
// pages/blog/index.js → /blog
// pages/blog/first-post.js → /blog/first-post
// pages/dashboard/settings/username.js → /dashboard/settings/username
// pages/blog/[slug].js	/blog/a	{ slug: 'a' }
// pages/blog/[slug].js	/blog/b	{ slug: 'b' }
// pages/blog/[slug].js	/blog/c	{ slug: 'c' }
