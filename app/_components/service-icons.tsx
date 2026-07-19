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
// new dictionary icons.
export const DICT_ICONS: Record<string, React.ReactNode> = {
  eye: <Eye className="w-7 h-7" />,
  heart: <Heart className="w-7 h-7" />,
  landmark: <Landmark className="w-7 h-7" />,
  "line-chart": <LineChart className="w-7 h-7" />,
  "map-pin": <MapPin className="w-7 h-7" />,
  "pie-chart": <PieChart className="w-7 h-7" />,
  "piggy-bank": <PiggyBank className="w-7 h-7" />,
  scale: <Scale className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
  target: <Target className="w-7 h-7" />,
  "trending-up": <TrendingUp className="w-7 h-7" />,
  users: <Users className="w-7 h-7" />,
};
