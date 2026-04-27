import * as Icons from 'lucide-react';

export function IconRenderer({ name, className, size = 24 }: { name: string, className?: string, size?: number }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} size={size} />;
  return <IconComponent className={className} size={size} />;
}
