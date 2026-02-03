
// ✅ CORRECT WAY 1 (Arrow Function + Default Export) ⭐ MOST USED
const Page = () => {
  return <div>Page</div>;
};

export default Page;


// ✔ Works in React
// ✔ Clean
// ✔ Professional

// ✅ CORRECT WAY 2 (One Line Function Export) ⭐ BEST STYLE
export default function Page() {
  return <div>Page</div>;
}

// ✅ React Named Export (Very Common)
export const Button = () => {
  return <button>Click</button>;
};


// ❌ WRONG (What you wrote)
export default const Page = () => {
  return <div>Page</div>;
};






// ✅ Next.js PAGE FILE (REQUIRED RULE)
// app/page.js MUST use DEFAULT EXPORT
// ⭐ Best Static Page
export default function Page() {
  return <div>Home</div>;
}

// ⭐ Best Server Page (Data Fetching)
export default async function Page() {
  const data = await fetch("url");
  return <div>Server Page</div>;
}

// ✅ Arrow Page (Allowed)
const Page = () => {
  return <div>Home</div>;
};

export default Page;


// ⚠ Allowed but not preferred

// ❌ WRONG IN NEXT.JS PAGE
// ❌ Named export breaks routing
export const Page = () => {
  return <div>Home</div>;
};

// ❌ Client component cannot be async
"use client";
export default async function Page() {}



// ===================================================
// 📚 JAVASCRIPT FUNCTION TYPES CHEAT SHEET
// ===================================================


// ===================================================
// ✅ SECTION 1: FUNCTION DECLARATIONS (VALID)
// ===================================================

// 1️⃣ Normal Function Declaration
function Page() {
  return <div>Page</div>;
}

// 2️⃣ Async Function Declaration
async function Page() {
  return <div>Page</div>;
}


// ===================================================
// ✅ SECTION 2: ARROW FUNCTIONS (VALID)
// ===================================================

// 3️⃣ Arrow Function
const Page = () => {
  return <div>Page</div>;
};

// 4️⃣ Async Arrow Function
const Page = async () => {
  return <div>Page</div>;
};

// 5️⃣ Arrow Function Short Syntax (One-Line Return)
const Page = () => <div>Page</div>;


// ===================================================
// ✅ SECTION 3: FUNCTION EXPRESSIONS (VALID)
// ===================================================

// 6️⃣ Function Expression
const Page = function () {
  return <div>Page</div>;
};

// 7️⃣ Async Function Expression
const Page = async function () {
  return <div>Page</div>;
};


// ===================================================
// ✅ SECTION 4: DEFAULT EXPORTS (VALID - FOR NEXT.JS PAGES)
// ===================================================

// 8️⃣ Default Export Function (⭐ BEST PRACTICE)
export default function Page() {
  return <div>Page</div>;
}

// 9️⃣ Default Export Async Function (⭐ BEST FOR SERVER COMPONENTS)
export default async function Page() {
  return <div>Page</div>;
}

// 🔟 Arrow Function + Default Export (Two Step)
const PageArrow = () => {
  return <div>Page</div>;
};
export default PageArrow;

// 1️⃣1️⃣ Async Arrow Function + Default Export (Two Step)
const PageAsyncArrow = async () => {
  return <div>Page</div>;
};
export default PageAsyncArrow;

// 1️⃣2️⃣ Function Expression + Default Export (Two Step)
const PageExpr = function () {
  return <div>Page</div>;
};
export default PageExpr;

// 1️⃣3️⃣ Async Function Expression + Default Export (Two Step)
const PageAsyncExpr = async function () {
  return <div>Page</div>;
};
export default PageAsyncExpr;


// ===================================================
// ✅ SECTION 5: NAMED EXPORTS (VALID - FOR COMPONENTS/HELPERS)
// ===================================================

// 1️⃣4️⃣ Named Export Function
export function Header() {
  return <div>Header</div>;
}
// ✔ For components/helpers
// ❌ NOT for Next.js page routing

// 1️⃣5️⃣ Named Export Arrow Function
export const Button = () => {
  return <div>Button</div>;
};
// ✔ Good for reusable components
// ❌ NOT for Next.js page routing


// ===================================================
// ⚠️ SECTION 6: VALID BUT NOT RECOMMENDED (AVOID)
// ===================================================

// 1️⃣6️⃣ Anonymous Default Function (⚠️ AVOID - Bad for debugging)
export default function () {
  return <div>Page</div>;
}

// 1️⃣7️⃣ Anonymous Default Async Function (⚠️ AVOID)
export default async function () {
  return <div>Page</div>;
}

// 1️⃣8️⃣ Anonymous Arrow Default Export (⚠️ AVOID - No name in error stack)
export default () => {
  return <div>Page</div>;
};

// 1️⃣9️⃣ One-Line Anonymous Arrow (⚠️ AVOID)
export default () => <div>Page</div>;


// ===================================================
// ❌ SECTION 7: INVALID / WRONG SYNTAX (WILL BREAK)
// ===================================================



// ❌ WRONG: Cannot use "export default const" together
export default const Page = () => {}

// ❌ WRONG: Cannot assign in export default
export default Page = () => {}

// ❌ WRONG: Named export won't work for Next.js page routing
export const Page = () => {
  return <div>Page</div>;
}

// ❌ WRONG: Lowercase component name (React treats as HTML tag)
export default function page() {
  return <div>Page</div>;
}

// ❌ WRONG: Client component cannot be async
"use client";
export default async function Page() {
  return <div>Page</div>;
}


// ===================================================
// 🏆 SUMMARY - WHICH TO USE?
// ===================================================
// 
// ⭐ FOR NEXT.JS PAGE (STATIC):
   export default function Page() {}
//
// ⭐ FOR NEXT.JS SERVER COMPONENT (DATA FETCHING):
   export default async function Page() {}
//
// ⭐ FOR CLIENT COMPONENT:
   "use client";
   export default function Page() {}
//
// ⭐ FOR REUSABLE COMPONENTS/HELPERS:
   export const Button = () => {}
   export function Header() {}
//
// ❌ NEVER USE:
//    - fun (not JS keyword)
//    - export default const
//    - anonymous exports
//    - lowercase component names
//    - async with "use client"
// ===================================================
// ✅ React Page / Component Export
// Best Practice (Component)
export default function Component() {
  return <div>Hello</div>;
}

// ✅ React Arrow Component
const Component = () => {
  return <div>Hello</div>;
};

export default Component;

// ✅ React Named Export (Very Common)
export const Button = () => {
  return <button>Click</button>;
};



// import { Button } from "./Button";

// ✅ React With Hooks (Allowed)
// import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>+</button>;
}

// ✅ Next.js PAGE FILE (REQUIRED RULE)
// app/page.js MUST use DEFAULT EXPORT
// ⭐ Best Static Page
export default function Page() {
  return <div>Home</div>;
}

// ⭐ Best Server Page (Data Fetching)
export default async function Page() {
  const data = await fetch("url");
  return <div>Server Page</div>;
}

// ✅ Arrow Page (Allowed)
const Page = () => {
  return <div>Home</div>;
};

export default Page;


// ⚠ Allowed but not preferred

// ❌ WRONG IN NEXT.JS PAGE
// ❌ Named export breaks routing
export const Page = () => {
  return <div>Home</div>;
};

// ❌ Client component cannot be async
"use client";
export default async function Page() {}

// ❌ Lowercase name
// export default function page() {}

// ✅ Next.js Client Component

// When using browser features:

// "use client";

export default function Page() {
  return <button>Click</button>;

}
