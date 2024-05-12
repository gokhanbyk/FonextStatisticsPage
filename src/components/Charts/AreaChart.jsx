import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { socialMediasData } from '../../API/data';

const socialMediaData = {
  linkedin: socialMediasData.find(data => data.platform === "linkedin").social.posts,
  twitter: socialMediasData.find(data => data.platform === "twitter").social.posts,
  instagram: socialMediasData.find(data => data.platform === "instagram").social.posts,
  facebook: socialMediasData.find(data => data.platform === "facebook").social.posts
};

const generatePostData = () => {
  const postLikes = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  months.forEach((month, index) => {
    postLikes.push({
      name: month,
      instagram: socialMediaData.instagram.length + ((index % 2 === 0) ? 1 : -2),
      twitter: socialMediaData.twitter.length + ((index % 2 === 0) ? -2 : 2),
      linkedin: socialMediaData.linkedin.length + ((index % 2 === 0) ? 3 : -4),
      facebook: socialMediaData.facebook.length + ((index % 2 === 0) ? -1 : 5)
    });
  });

  return postLikes;
};

function AreaChartComponent() {
  const postLikes = generatePostData();

  return (
    <div>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart
          width={400}
          height={400}
          data={postLikes}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          syncId="anyId"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid />
          <Tooltip />
          <Legend />
          {Object.keys(socialMediaData).map((platform, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey={platform}
              stroke={getStrokeColor(platform)}
              fill={getFillColor(platform)}
              stackId={1}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function getStrokeColor(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'twitter':
      return '#333333';
    case 'linkedin':
      return '#5EBCD8';
    case 'facebook':
      return '#008cba';
    default:
      return '#000000';
  }
}

function getFillColor(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'twitter':
      return '#333333';
    case 'linkedin':
      return '#5EBCD8';
    case 'facebook':
      return '#008cba';
    default:
      return '#000000';
  }
}

export default AreaChartComponent;
