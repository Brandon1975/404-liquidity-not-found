export function Button({ children, variant }) {
  const base = "px-4 py-2 rounded font-semibold";
  const style = variant === "outline"
    ? "border border-gray-500 text-gray-700"
    : "bg-red-600 text-white";
  return <button className={base + ' ' + style}>{children}</button>;
}
