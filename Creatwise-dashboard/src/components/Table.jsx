const dummyData = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant[2900] ",
    words: 2408,
    created: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services[390]",
    words: 1793,
    created: "---",
  },
  {
    title: "Top Amazon Payment Methods For Quick Access to Funds",
    keyword: "amazon payment methods[3600]",
    words: 2647,
    created: "---",
  },
  {
    title: "Backlinks 101: What are backlinks and why are they important?",
    keyword: "backlinks[8100]",
    words: 2261,
    created: "---",
  },
  {
    title: "7 leading AI SEO tools in 2024(Ranked & Compared)",
    keyword: "ai seo software[880]",
    words: 1543,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services[390]",
    words: 1974,
    created: "---",
  }
];

const Table = () => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
          <tr>
            <th className="px-4 py-3"><input type="checkbox" /></th>
            <th className="px-4 py-3">Article Title</th>
            <th className="px-4 py-3">Keyword [Traffic]</th>
            <th className="px-4 py-3">Words</th>
            <th className="px-4 py-3">Created On</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Publish</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3"><input type="checkbox" /></td>
              <td className="px-4 py-3">{item.title}</td>
              <td className="px-4 py-3">{item.keyword}</td>
              <td className="px-4 py-3">{item.words}</td>
              <td className="px-4 py-3">{item.created}</td>
              <td className="px-4 py-3">
                <button className="text-green-600 font-medium">View</button>
              </td>
              <td className="px-4 py-3">
                <span className="text-gray-400">--</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center p-4 text-sm text-gray-600">
        <p>Total {dummyData.length} Article Titles</p>
        <div>
          Show 
          <select className="mx-2 border rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries per page
        </div>
      </div>
    </div>
  );
};

export default Table;
