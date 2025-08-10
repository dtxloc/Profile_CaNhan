import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Facebook,
  Code,
  Database,
  Globe,
  Send,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Folder,
  Star
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills-contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML',  color: 'bg-orange-500' },
    { name: 'CSS',  color: 'bg-blue-500' },
    { name: 'JavaScript',  color: 'bg-yellow-500' },
    { name: 'React',  color: 'bg-cyan-500' },
    { name: 'Java',  color: 'bg-red-500' },
    { name: 'Python',  color: 'bg-green-500' },
    { name: 'C++',  color: 'bg-purple-500' },
    { name: 'SQL', color: 'bg-indigo-500' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Ứng Dụng Dự Báo Thời Tiết',
      description: 'Dự báo thời tiết theo ngày theo giờ tiếp theo',
      technologies: ['API', 'Java'],
      link: '',
      status: 'Hoàn thành',
      featured: true
    },
    {
      id: 2,
      title: 'Ứng dụng Quản lý Điểm Sinh viên',
      description: 'Hệ thống quản lý thông tin sinh viên, điểm số và lịch học. Giao diện thân thiện và dễ sử dụng.',
      technologies: ['Java', 'SQL Server'],
      link: '',
      status: 'Hoàn thành',
      featured: false
    },
    {
      id: 3 ,
      title: 'Website Portfolio Cá nhân',
      description: 'Trang web giới thiệu bản thân và các dự án đã thực hiện với thiết kế responsive và hiện đại.',
      technologies: ['React', 'Tailwind CSS'],
      link: '',
      status: 'Hoàn thành',
      featured: true
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Đặng Thị Xuân Lộc</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: 'Trang chủ' },
                  { id: 'about', label: 'Giới thiệu' },
                  { id: 'projects', label: 'Dự án' },
                  { id: 'skills-contact', label: 'Kỹ năng & Liên hệ' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Trang chủ' },
                { id: 'about', label: 'Giới thiệu' },
                { id: 'projects', label: 'Dự án' },
                { id: 'skills-contact', label: 'Kỹ năng & Liên hệ' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                      src="img/avatar.jpg"
                      alt="Ảnh đại diện Đặng Thị Xuân Lộc"
                      className="w-full h-full object-cover rounded-full"
                    />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
               Đặng Thị Xuân Lộc
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sinh viên năm cuối chuyên ngành Công nghệ Thông tin, đam mê lập trình web và phát triển ứng dụng
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-12"> 
            {[
              { icon: Facebook, href:'https://facebook.com/ĐặngLộc' , color: 'hover:bg-gradient-to-tr hover:from-blue-500 hover:to-blue-700 text-blue-600 hover:text-white' },
              { icon: Github, href: 'https://github.com/dtxloc' , color: 'hover:bg-gradient-to-tr hover:from-gray-700 hover:to-black text-gray-800 hover:text-white' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-3 bg-white rounded-full shadow-md ${social.color} transition-all duration-300 hover:shadow-lg hover:scale-110`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giới thiệu về tôi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tiểu sử cá nhân</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tôi là sinh viên năm cuối chuyên ngành Công nghệ Thông tin tại Đại học Đà Lạt. 
                  Với niềm đam mê lập trình từ những ngày đầu tiếp xúc với máy tính, tôi đã 
                  không ngừng học hỏi và phát triển kỹ năng trong lĩnh vực phát triển web và 
                  ứng dụng di động.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Học vấn</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Đại học Đà Lạt - Công nghệ Thông tin (2022-2027)</li>
                  <li>• Chuyên môn: Phát triển web, Lập trình ứng dụng</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mục tiêu nghề nghiệp</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành một lập trình viên full-stack chuyên nghiệp, có khả năng xây dựng 
                  các ứng dụng web hiện đại và thân thiện với người dùng. Tôi mong muốn được 
                  làm việc trong một môi trường năng động và có cơ hội phát triển kỹ năng 
                  cũng như đóng góp vào các dự án có ý nghĩa.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sở thích</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ngoài lập trình, tôi còn yêu thích đọc sách về công nghệ, tham gia các 
                  khóa học online, và khám phá những công nghệ mới. Tôi cũng thích chơi 
                  thể thao và du lịch để tái tạo năng lượng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dự án đã thực hiện
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dưới đây là một số dự án tiêu biểu mà tôi đã thực hiện trong quá trình học tập và phát triển kỹ năng lập trình
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Star className="mr-3 text-yellow-500" />
              Dự án nổi bật
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Hoàn thành' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                      <Github className="mr-2" size={16} />
                      Xem mã nguồn
                      <ExternalLink className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* All Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Folder className="mr-3 text-blue-600" />
              Tất cả dự án
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Hoàn thành' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                  >
                    <Github className="mr-1" size={14} />
                    Mã nguồn
                    <ExternalLink className="ml-1" size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Skills & Contact Section */}
      <section id="skills-contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kỹ năng & Liên hệ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Code className="mr-3 text-blue-600" />
                Kỹ năng lập trình
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                 
                    </div>
                   
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Globe, label: 'Web Development' },
                  { icon: Database, label: 'Database' },
                  { icon: Code, label: 'Programming' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <item.icon className="mx-auto text-blue-600 mb-2" size={24} />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Mail className="mr-3 text-blue-600" />
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Mail, label: 'Email', value: '2212405@email.com' },
                  { icon: Phone, label: 'Điện thoại', value: '+84 0335955667' },
                  { icon: MapPin, label: 'Địa chỉ', value: 'Đà Lạt, Việt Nam' }
                ].map((contact, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                    <contact.icon className="text-blue-600 mr-4" size={20} />
                    <div>
                      <span className="text-sm text-gray-500 block">{contact.label}</span>
                      <span className="font-medium text-gray-900">{contact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Gửi tin nhắn</h4>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tin nhắn của bạn"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={16} />
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Đặng Thị Xuân Lộc. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;