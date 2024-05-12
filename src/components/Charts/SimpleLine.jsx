/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap';
import { LineChart, Line } from 'recharts';

function SimpleLineChart({ selectedSocialMedia }) {
  const socialMediaFollower = selectedSocialMedia.social.user_info.follower_count;
  const socialMediaPosts = selectedSocialMedia.social.posts;
  const totalLikes = selectedSocialMedia.social.posts.reduce((acc, cur) => acc + cur.like_count, 0);

  let statClasses = 'mx-auto border rounded-4 p-2 py-3 align-items-center bg-light text-light';
  if (selectedSocialMedia.platform === 'facebook') {
    statClasses = 'mx-auto border rounded-4 p-2 py-3 align-items-center bg-primary text-light';
  } else if (selectedSocialMedia.platform === 'instagram') {
    statClasses = 'mx-auto border rounded-4 p-2 py-3 align-items-center bg-danger text-light';
  } else if (selectedSocialMedia.platform === 'linkedin') {
    statClasses = 'mx-auto border rounded-4 p-2 py-3 align-items-center bg-info text-light';
  } else if (selectedSocialMedia.platform === 'twitter') {
    statClasses = 'mx-auto border rounded-4 p-2 py-3 align-items-center bg-dark text-light';
  }

  const socialMediaFollowerCount = [
    { follower: socialMediaFollower + 2000 },
    { follower: socialMediaFollower + 4500 },
    { follower: socialMediaFollower + 8513 },
    { follower: socialMediaFollower + 12821 },
  ];

  const socialMediaPostCount = [
    { postCount: socialMediaPosts.length - 1 },
    { postCount: socialMediaPosts.length + 1 },
    { postCount: socialMediaPosts.length - 2 },
    { postCount: socialMediaPosts.length + 2 },
  ];

  const socialMediaLikeCount = [
    { likeCount: totalLikes - 500 },
    { likeCount: totalLikes + 700 },
    { likeCount: totalLikes - 300 },
    { likeCount: totalLikes + 400 },
  ];

  return (
    <div className="d-flex gap-5">
      <div>
        <Row className={statClasses} style={{ width: 400 }}>
          <Col md={7}>
            <h4>Takipçi</h4>
            <p className="fs-2 fs-bold">{socialMediaFollower}</p>
            <p style={{ fontSize: 15 }}>Geçen haftaya göre ...</p>
          </Col>
          <Col md={4}>
            <LineChart width={150} height={150} data={socialMediaFollowerCount}>
              <Line type="monotone" dataKey="follower" dot={false} stroke="#fff" />
            </LineChart>
          </Col>
        </Row>
      </div>
      <div>
        <Row className={statClasses} style={{ width: 400 }}>
          <Col md={7}>
            <h4>Paylaşımlar</h4>
            <p className="fs-2 fs-bold">{socialMediaPosts.length}</p>
            <p style={{ fontSize: 15 }}>Geçen haftaya göre ...</p>
          </Col>
          <Col md={4}>
            <LineChart width={150} height={150} data={socialMediaPostCount}>
              <Line type="monotone" dataKey="postCount" dot={false} stroke="#fff" />
            </LineChart>
          </Col>
        </Row>
      </div>
      <div>
        <Row className={statClasses} style={{ width: 400 }}>
          <Col md={7}>
            <h4>Toplam Beğeni</h4>
            <p className="fs-2 fs-bold">{totalLikes}</p>
            <p style={{ fontSize: 15 }}>Geçen haftaya göre ...</p>
          </Col>
          <Col md={4}>
            <LineChart width={150} height={150} data={socialMediaLikeCount}>
              <Line type="monotone" dataKey="likeCount" dot={false} stroke="#fff" />
            </LineChart>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SimpleLineChart;
