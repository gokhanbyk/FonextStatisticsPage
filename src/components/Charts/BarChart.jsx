import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { socialMediasData } from '../../API/data';

const getRandomLikes = () => Math.round(Math.random() * 1000);

const calculateTotalLikes = (platform) => {
  const platformData = socialMediasData.find(data => data.platform === platform);
  return platformData ? platformData.social.posts.reduce((acc, cur) => acc + cur.like_count, 0) : 0;
};

const generateSalesData = () => {
  const platforms = ['linkedin', 'twitter', 'instagram', 'facebook'];
  const salesData = [];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  months.forEach(month => {
    const data = {
      name: month
    };
    platforms.forEach(platform => {
      const totalLikes = calculateTotalLikes(platform);
      data[platform] = totalLikes + (Math.random() > 0.5 ? -getRandomLikes() : getRandomLikes());
    });
    salesData.push(data);
  });

  return salesData;
};

function BarChartComponent() {
  const salesData = generateSalesData();

  return (
    <ResponsiveContainer width="90%" height={400}>
      <h3>Toplam Beğeni</h3>
      <BarChart width={500} height={300} data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {['instagram', 'linkedin', 'twitter', 'facebook'].map((platform, index) => (
          <Bar key={index} dataKey={platform} fill={getFill(platform)} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function getFill(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'linkedin':
      return '#5EBCD8';
    case 'twitter':
      return '#333333';
    case 'facebook':
      return '#008cba';
    default:
      return '#000000';
  }
}

export default BarChartComponent;
