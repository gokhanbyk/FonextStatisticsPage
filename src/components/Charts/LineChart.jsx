import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { socialMediasData } from '../../API/data';

const socialMediaData = {
  linkedin: socialMediasData.find(data => data.platform === 'linkedin').social.user_info.follower_count,
  twitter: socialMediasData.find(data => data.platform === 'twitter').social.user_info.follower_count,
  instagram: socialMediasData.find(data => data.platform === 'instagram').social.user_info.follower_count,
  facebook: socialMediasData.find(data => data.platform === 'facebook').social.user_info.friend_count
};

const generateSocialData = () => {
  const socialData = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  months.forEach((month, index) => {
    socialData.push({
      name: month,
      instagram: socialMediaData.instagram + getInstagramFollowersChange(index),
      twitter: socialMediaData.twitter + getTwitterFollowersChange(index),
      facebook: socialMediaData.facebook + getFacebookFriendsChange(index),
      linkedin: socialMediaData.linkedin + getLinkedinFollowersChange(index)
    });
  });

  return socialData;
};

const getInstagramFollowersChange = (index) => {
  switch (index) {
    case 0: return 2000;
    case 1: return 3000;
    case 2: return 4800;
    case 3: return 3908;
    case 4: return -2800;
    case 5: return 3800;
    default: return 0;
  }
};

const getTwitterFollowersChange = (index) => {
  switch (index) {
    case 0: return 3398;
    case 1: return 3398;
    case 2: return -2000;
    case 3: return 5000;
    case 4: return 1890;
    case 5: return 2390;
    default: return 0;
  }
};

const getFacebookFriendsChange = (index) => {
  switch (index) {
    case 0: return 1398;
    case 1: return 1398;
    case 2: return 4000;
    case 3: return 4800;
    case 4: return 2780;
    case 5: return -1890;
    default: return 0;
  }
};

const getLinkedinFollowersChange = (index) => {
  switch (index) {
    case 0: return 2400;
    case 1: return 2400;
    case 2: return 2000;
    case 3: return -2780;
    case 4: return 2000;
    case 5: return 2390;
    default: return 0;
  }
};

function LineChartComponent() {
  const socialData = generateSocialData();

  return (
    <ResponsiveContainer width="90%" height="100%">
      <LineChart width={500} height={400} data={socialData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip cursor={{ stroke: 'black', strokeWidth: 2 }} />
        <Legend />
        {Object.keys(socialMediaData).map((platform, index) => (
          <Line key={index} type="monotone" dataKey={platform} stroke={getStrokeColor(platform)} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function getStrokeColor(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'twitter':
      return '#333333';
    case 'facebook':
      return '#008cba';
    case 'linkedin':
      return '#5EBCD8';
    default:
      return '#000000';
  }
}

export default LineChartComponent;
