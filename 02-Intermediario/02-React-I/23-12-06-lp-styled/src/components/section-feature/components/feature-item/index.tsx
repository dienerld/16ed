import { LucideIcon } from 'lucide-react';

import { Title, Subtitle, WrapperFeatureItem } from './style';

interface FeatureItemProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export function FeatureItem({ title, subtitle, icon: Icon }: FeatureItemProps) {
  return (
    <WrapperFeatureItem>
      <Icon size={48} color="blue" />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </WrapperFeatureItem>
  );
}
