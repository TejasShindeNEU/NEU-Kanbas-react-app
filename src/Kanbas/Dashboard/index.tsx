import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <img src="images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234/Home">
                    CS1234 React JS
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Full Stack software developer
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img src="images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5610/Home">
                    CS5610 Web Development
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Full Stack Web developer
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5800/Home">
                    CS5800 Algorithms
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Algorithms
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5010/Home">
                    CS5010 PDP
                    </Link>
                    <p className="wd-dashboard-course-title">
                    PDP
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img src="/images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5200/Home">
                    CS5200 Machine Learning
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Machine Learning
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/6140/Home">
                    CS6140 NLP
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Natural Language Processing
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
            <div className="wd-dashboard-course">
                <img src="/images/coursethumbnail.jpg" width={200} />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5330/Home">
                    CS5330 Pattern Recognition and Computer Vision
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Pattern Recognition and Computer Vision
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                </div>
            </div>
      </div>
    </div>
  );
}
