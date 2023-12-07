import { CheckCircle2Icon, Layers3Icon, MonitorIcon } from 'lucide-react';
import { WrapperSection } from './styles';
import { FeatureItem } from './components/feature-item';

export function SectionFeature() {
  return (
    <WrapperSection>
      <FeatureItem
        icon={MonitorIcon}
        title="Somente para desktop"
        subtitle="Vamos aprender como utilizar um Framework"
      />

      <FeatureItem
        icon={Layers3Icon}
        title="Somente para desktop"
        subtitle="Vamos aprender como utilizar um Framework"
      />

      <FeatureItem
        icon={CheckCircle2Icon}
        title="Somente para desktop"
        subtitle="Vamos aprender como utilizar um Framework"
      />
    </WrapperSection>
  );
}
