
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/tars-networks/' },
    { name: 'Cal.com', url: 'https://cal.com/yashwanth-devulapally/30min?user=yashwanth-devulapally' }
  ];

  return (
    <footer id="contact" className="pt-32 pb-12 border-t border-white/10 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Team & Culture Snippet */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-4xl font-light text-white mb-8 tracking-tight">Built by humans, for humans.</h2>
                <p className="text-gray-200 font-light max-w-lg text-lg leading-relaxed">
                    We believe in quiet competence. Our culture is defined by deep work, honest feedback, and the satisfaction of a system running perfectly.
                </p>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end">
                <a href="mailto:tarsnetworks@gmail.com" className="text-2xl md:text-3xl text-white font-mono hover:text-emerald-400 transition-colors font-bold border-b border-white/20 pb-2">
                    tarsnetworks@gmail.com
                </a>
                <p className="text-gray-300 text-base mt-4 font-mono tracking-widest font-bold">HYDERABAD, INDIA</p>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-300 font-mono text-sm tracking-widest font-bold">
            © {new Date().getFullYear()} TARS NETWORKS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10">
            {socials.map((social) => (
                <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-emerald-400 text-sm font-mono uppercase tracking-[0.2em] transition-all font-bold hover:-translate-y-1 block"
                >
                    {social.name}
                </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
