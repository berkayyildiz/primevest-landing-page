import Image from "next/image";
import {
  Banknote,
  Landmark,
  LineChart,
  Newspaper,
  PieChart,
  Target,
  Wallet,
} from "lucide-react";
import type { BlogKey } from "@/app/_lib/i18n";
import type { BlogPost } from "@/app/_lib/blog";

// Branded cover art for blog posts that have no photography: an ink panel
// with an inset gold keyline (certificate-like) and a thin line-art icon.
// Fills its (relative) parent, mirroring how next/image with `fill` behaves.
const COVERS: Record<BlogKey, { icon: React.ReactNode; tone: string }> = {
  advisory: {
    icon: <LineChart className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink",
  },
  cyprusEconomy: {
    icon: <Landmark className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink-deep",
  },
  banking: {
    icon: <Wallet className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink-light",
  },
  portfolio: {
    icon: <PieChart className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink",
  },
  fxSavings: {
    icon: <Banknote className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink-deep",
  },
  press: {
    icon: <Newspaper className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink-light",
  },
  financialPlanning: {
    icon: <Target className="w-16 h-16" strokeWidth={1} />,
    tone: "bg-ink",
  },
};

function BlogCover({ postKey }: { postKey: BlogKey }) {
  const cover = COVERS[postKey];

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${cover.tone} overflow-hidden`}
    >
      <div className="absolute inset-3 border border-gold/30" />
      <div className="absolute inset-0 flex items-center justify-center text-gold/40">
        {cover.icon}
      </div>
    </div>
  );
}

// The single cover renderer for every blog surface: the post's photo when it
// has one, the generated branded cover otherwise. Must be placed inside a
// `relative` container, like next/image with `fill`.
export function PostCover({
  post,
  sizes,
  imageClassName = "object-cover group-hover:scale-[1.03] transition-transform duration-700",
  priority = false,
}: {
  post: Pick<BlogPost, "key" | "title" | "image">;
  sizes: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  if (!post.image) return <BlogCover postKey={post.key} />;

  return (
    <Image
      src={post.image}
      alt={post.title}
      fill
      className={imageClassName}
      sizes={sizes}
      priority={priority}
    />
  );
}
