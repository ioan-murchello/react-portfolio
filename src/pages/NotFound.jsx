
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-6">
      <div className="max-w-md w-full text-center space-y-6">

        <h1 className="text-[120px] font-light leading-none tracking-tighter text-zinc-200 dark:text-zinc-800 select-none">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
           Not Found
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
           The page doesn&apos;t exist.  
          </p>
        </div>
 
        <div className="pt-4">
          <button
            onClick={() => navigate('/')}
            className="text-sm font-medium text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-60 transition-opacity cursor-pointer"
          >
            back to main
          </button>
        </div>
      </div>
 
      <footer className="absolute bottom-8 text-[10px] uppercase tracking-widest text-zinc-400">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default NotFound;