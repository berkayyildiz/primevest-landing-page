import { notFound } from "next/navigation";

// Catch-all for URLs that don't match any localized route, so unknown paths
// render the localized 404 inside the [locale] layout.
export default function CatchAllPage() {
  notFound();
}
