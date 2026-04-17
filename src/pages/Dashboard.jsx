import '../App.css';
import logo from '../assets/logo.png';
import {
  TbLayoutDashboard,
  TbUsers,
  TbPencilMinus,
  TbUpload,
  TbClockEdit,
  TbChartLine,
  TbLogout,
  TbBell
} from 'react-icons/tb';

function Dashboard() {

  const stats = [
    { val: '124', label: 'users live', color: 'blue' },
    { val: '6', label: 'exams active', color: 'cyan' },
    { val: '2', label: 'uploads today', color: 'purple' },
    { val: '98%', label: 'system uptime', color: 'green' },
  ];

  return (
    <div className="container">


      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>

          <span className="logo-name">
            <span>supnum</span>
          </span>
        </div>


        <div className="profile">
          <div className="avatar">AD</div>

          <div className="profile-info">
            <div className="profile-name">
              Administrator
            </div>

            <div className="profile-role">
              system control panel
            </div>
          </div>
        </div>


        <div className="menu-label">
          admin tools
        </div>

        <a className="menu-item">
          <TbUsers size={15} />
          users live
        </a>

        <a className="menu-item">
          <TbUpload size={15} />
          exams upload
        </a>

        <a className="menu-item">
          <TbClockEdit size={15} />
          time edit
        </a>

        <a className="menu-item">
          <TbChartLine size={15} />
          analyze
        </a>
	 
	<a className="menu-item">
	  <TbPencilMinus size={15} />
	  Grading Room
	</a>
        <div className="sidebar-bottom">

          <a className="menu-item">
            <TbLogout size={15} />
            logout
          </a>

        </div>

      </aside>
      <div className="content">


        <div className="topbar">

          <div>
            <div className="topbar-title">
              admin dashboard
            </div>

            <div className="topbar-sub">
              system management panel
            </div>
          </div>

          <div className="topbar-right">

            <div className="notif">
              <TbBell size={15} color="#6fa8ff" />
              <div className="notif-dot"></div>
            </div>

          </div>

        </div>

        <div className="main">


          <div className="stats-grid">

            {stats.map((s, i) => (

              <div
                className={`stat-card ${s.color}`}
                key={i}
              >

                <div className="stat-val">
                  {s.val}
                </div>

                <div className="stat-label">
                  {s.label}
                </div>

              </div>

            ))}

          </div>


          <div className="cards-grid">

            <div className="module-card">
              <div className="module-name">
                Users Live Monitoring
              </div>

              <div className="module-desc">
                View active users and system access
                in real time.
              </div>
            </div>

            <div className="module-card">
              <div className="module-name">
                Upload Exams
              </div>

              <div className="module-desc">
                Add new exams and manage exam
                content.
              </div>
            </div>

            <div className="module-card">
              <div className="module-name">
                Edit Exam Time
              </div>

              <div className="module-desc">
                Adjust exam schedules and duration.
              </div>
            </div>

            <div className="module-card">
              <div className="module-name">
                Analyze Results
              </div>

              <div className="module-desc">
                View statistics and performance
                analysis.
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
