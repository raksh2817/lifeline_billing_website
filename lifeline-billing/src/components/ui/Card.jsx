export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 border border-border 
                    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] 
                    hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] 
                    hover:border-primary hover:-translate-y-2 
                    transition-all duration-300 ease-out
                    flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-dark mb-3">
        {title}
      </h3>
      
      <p className="text-base text-muted leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
