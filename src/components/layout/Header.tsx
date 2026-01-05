import { Link, useLocation } from 'react-router-dom';
import { Leaf, LayoutDashboard, Scan, User, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Leaf },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/scan', label: 'Scan Crop', icon: Scan },
    { path: '/profile', label: 'Farm Profile', icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-civora h-10 w-10 rounded-lg flex items-center justify-center">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-civora-blue">CropGuard AI</span>
            <span className="text-[10px] text-muted-foreground">by Civora Nexus Pvt. Ltd.</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors hover:text-civora-blue',
                  isActive
                    ? 'text-civora-blue'
                    : 'text-muted-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Bell className="h-5 w-5 text-civora-blue" />
          <span className="hidden sm:inline text-sm font-medium">Alerts</span>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t px-4 py-2 flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors',
                isActive
                  ? 'text-civora-blue bg-blue-50'
                  : 'text-muted-foreground hover:text-civora-blue hover:bg-gray-50'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
