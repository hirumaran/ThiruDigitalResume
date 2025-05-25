
import { ExternalLink, Calendar, AlertTriangle } from "lucide-react";

const CVESection = () => {
  const cves = [
    {
      id: "CVE-2024-XXXX",
      title: "Remote Code Execution in Enterprise Software",
      severity: "Critical",
      severityColor: "bg-red-500",
      description: "Discovered a critical RCE vulnerability in widely-used enterprise software affecting thousands of organizations worldwide.",
      status: "Disclosed",
      date: "2024",
      impact: "High"
    },
    {
      id: "CVE-2023-XXXX",
      title: "SQL Injection in Web Application Framework",
      severity: "High",
      severityColor: "bg-orange-500",
      description: "Identified SQL injection vulnerability in popular web framework that could lead to data breach.",
      status: "Patched",
      date: "2023",
      impact: "Medium"
    },
    {
      id: "CVE-2023-XXXX",
      title: "Authentication Bypass in Mobile Application",
      severity: "High",
      severityColor: "bg-orange-500",
      description: "Found authentication bypass vulnerability in mobile application affecting user account security.",
      status: "Patched",
      date: "2023",
      impact: "Medium"
    },
    {
      id: "CVE-2022-XXXX",
      title: "Cross-Site Scripting in Content Management System",
      severity: "Medium",
      severityColor: "bg-yellow-500",
      description: "Discovered XSS vulnerability in popular CMS platform affecting website security.",
      status: "Patched",
      date: "2022",
      impact: "Low"
    }
  ];

  return (
    <section id="cves" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            CVE Discoveries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of Common Vulnerabilities and Exposures (CVEs) I've discovered and responsibly disclosed to help improve cybersecurity across the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cves.map((cve, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] p-8 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-gray-700" />
                  <h3 className="text-xl font-bold text-gray-900">{cve.id}</h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${cve.severityColor}`}>
                  {cve.severity}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{cve.title}</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">{cve.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{cve.date}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {cve.status}
                  </span>
                  <span className="text-xs">Impact: {cve.impact}</span>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All vulnerabilities are responsibly disclosed following industry best practices and coordinated disclosure timelines.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All CVEs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVESection;
