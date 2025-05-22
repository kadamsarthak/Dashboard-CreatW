import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  ClipboardList,
  CheckCircle2,
  BookMarked,
  BarChart2,
  Layers,
  Database,
  Settings,
  PlusCircle,
  LayoutTemplate,
  Link,
  Cloud,
  Zap,
  User,
  HelpCircle,
  MessageCircle,
  Bell,
  Hash,
} from "lucide-react";

const Sidebar = () => {
  const [isArticleOpen, setArticleOpen] = useState(true);

  const articleLinks = [
    { label: "Create Article", icon: PlusCircle },
    { label: "Generated Articles", icon: FileText },
    { label: "Keyword Projects", icon: Hash },
    { label: "AI Keyword to Article", icon: BarChart2 },
    { label: "Steal Competitor Keyword", icon: Layers },
    { label: "Import Keyword from GSC", icon: Database },
    { label: "Manual Keyword to Article", icon: FileText },
    { label: "Bulk Keyword to Article", icon: ClipboardList },
    { label: "Longtail Keyword to Article", icon: FileText },
    { label: "Article Settings", icon: Settings },
  ];

  const otherLinks = [
    { label: "Auto Blog", icon: LayoutTemplate },
    { label: "Internal Links", icon: Link },
    { label: "Free Backlinks", icon: Link },
    { label: "Integrations", icon: Cloud },
    { label: "Subscription", icon: ClipboardList },
    { label: "Affiliate Program", icon: User },
    { label: "Help Center", icon: HelpCircle },
    { label: "Updates", icon: Bell },
    { label: "Live Chat Support", icon: MessageCircle },
    { label: "Profile", icon: User },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="text-2xl font-bold mb-6">abun</div>

      {/* Domain dropdown */}
      <div className="mb-6">
        <select className="border rounded w-full px-2 py-1 text-sm">
          <option>amazon.com</option>
        </select>
      </div>

      {/* Articles Dropdown */}
      <div>
        <button
          onClick={() => setArticleOpen(!isArticleOpen)}
          className="flex justify-between items-center w-full text-sm text-gray-600 font-medium mb-2"
        >
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-blue-600" strokeWidth={1.5} />
            <span>Articles</span>
          </div>
          {isArticleOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        {isArticleOpen && (
          <ul className="ml-6 mb-4 space-y-2 text-sm">
            {articleLinks.map(({ label, icon: Icon }, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <Icon size={18} className="text-blue-600" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Other Sidebar Links */}
      <div className="mt-4 space-y-2 text-sm">
        {otherLinks.map(({ label, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            <Icon size={18} className="text-blue-600" strokeWidth={1.5} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
