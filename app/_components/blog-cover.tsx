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

// Branded cover art for blog posts that have no photography: a gradient in
// the brand palette with a large watermark icon. Fills its (relative) parent,
// mirroring how next/image with `fill` behaves.
const COVERS: Record<BlogKey, { icon: React.ReactNode; gradient: string }> = {
  advisory: {
    icon: <LineChart className="w-24 h-24" />,
    gradient: "from-primary via-primary-light to-accent",
  },
  cyprusEconomy: {
    icon: <Landmark className="w-24 h-24" />,
    gradient: "from-primary-dark via-primary to-accent-dark",
  },
  banking: {
    icon: <Wallet className="w-24 h-24" />,
    gradient: "from-accent-dark via-primary to-primary-dark",
  },
  portfolio: {
    icon: <PieChart className="w-24 h-24" />,
    gradient: "from-primary via-accent-dark to-accent",
  },
  fxSavings: {
    icon: <Banknote className="w-24 h-24" />,
    gradient: "from-primary-dark via-primary-light to-gold-dark",
  },
  press: {
    icon: <Newspaper className="w-24 h-24" />,
    gradient: "from-primary via-primary-light to-gold",
  },
  financialPlanning: {
    icon: <Target className="w-24 h-24" />,
    gradient: "from-accent-dark via-primary-light to-primary",
  },
};

function BlogCover({ postKey }: { postKey: BlogKey }) {
  const cover = COVERS[postKey];

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-gradient-to-br ${cover.gradient} overflow-hidden`}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute -bottom-14 -left-14 w-56 h-56 bg-white/5 rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center text-white/25">
        {cover.icon}
      </div>
    </div>
  );
}

// The single cover renderer for every blog surface: the post's photo when it
// has one, the generated gradient cover otherwise. Must be placed inside a
// `relative` container, like next/image with `fill`.
export function PostCover({
  post,
  sizes,
  imageClassName = "object-cover group-hover:scale-105 transition-transform duration-500",
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
