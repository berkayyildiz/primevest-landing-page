import {
  Eye,
  Heart,
  Landmark,
  LineChart,
  MapPin,
  PieChart,
  PiggyBank,
  Scale,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

// Single registry for every icon key the dictionaries reference (services
// items, homepage why-items, about-page values). A key used in a dictionary
// but missing here renders an empty icon box, so extend this map when adding
// new dictionary icons. Thin strokes keep them quiet; the parent sets color.
const iconProps = { className: "w-6 h-6", strokeWidth: 1.25 } as const;

export const DICT_ICONS: Record<string, React.ReactNode> = {
  eye: <Eye {...iconProps} />,
  heart: <Heart {...iconProps} />,
  landmark: <Landmark {...iconProps} />,
  "line-chart": <LineChart {...iconProps} />,
  "map-pin": <MapPin {...iconProps} />,
  "pie-chart": <PieChart {...iconProps} />,
  "piggy-bank": <PiggyBank {...iconProps} />,
  scale: <Scale {...iconProps} />,
  shield: <Shield {...iconProps} />,
  target: <Target {...iconProps} />,
  "trending-up": <TrendingUp {...iconProps} />,
  users: <Users {...iconProps} />,
};
