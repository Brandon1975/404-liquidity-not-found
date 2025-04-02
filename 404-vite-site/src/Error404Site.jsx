import React from "react";

function Card({ children }) {
  return <div className="border rounded-xl p-4 shadow bg-white">{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, variant }) {
  const base = "px-4 py-2 rounded font-semibold";
  const style =
    variant === "outline"
      ? "border border-gray-500 text-gray-700"
      : "bg-red-600 text-white";
  return <button className={base + " " + style}>{children}</button>;
}

export default function Error404Site() {
  return (
    <div className="p-4 grid gap-6 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404: Liquidity Not Found</h1>
        <p className="text-lg mt-2">
          The first meme coin born from a failed presale. The chart won't load. The dev ghosted. And yet... you're still here.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button>Buy $404</Button>
          <Button variant="outline">Join Telegram</Button>
          <Button variant="outline">Chart (Maybe)</Button>
        </div>
        <div className="mt-6">
          <img src="/404-logo.png" alt="$404 coin logo" className="mx-auto rounded-xl shadow w-48" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What is $404?</h2>
        <Card>
          <CardContent className="p-4">
            <p className="text-md italic">“Liquidity Not Found.”</p>
            <p className="text-sm mt-2">
              $404 is a cursed token built for traders who click first and think later. It's a tribute to broken links, rugged pairs, and all the hope you once had. There's no whitepaper. No roadmap. No support. Just an error.
            </p>
            <p className="text-xs mt-2 text-muted-foreground">
              It was meant to be a presale. Then the dev copy-pasted the wrong contract. Then they vanished. Now $404 is loose on Solana. And it just won’t die.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Q1: Launch fails, dev disappears</li>
          <li>Q2: Community buys anyway</li>
          <li>Q3: Chart won't load on Birdeye</li>
          <li>Q4: Token accidentally becomes viral</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How to Buy</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Install Phantom Wallet</li>
          <li>Create wallet & back up 12-word phrase</li>
          <li>Buy 0.1+ SOL and send to Phantom</li>
          <li>Go to pump.fun</li>
          <li>Search for "$404"</li>
          <li>Buy anyway. You’ve made worse decisions.</li>
        </ol>
      </section>

      <footer className="text-center text-sm text-muted-foreground mt-10">
        <p>This site might not load properly. Please refresh your regrets.</p>
        <div className="mt-2">Links: Twitter | Telegram | Birdeye (if it works)</div>
      </footer>
    </div>
  );
}
