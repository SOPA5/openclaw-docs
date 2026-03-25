import MDXComponents from '@theme-original/MDXComponents';
import type { MDXComponentsObject } from '@theme/MDXComponents';
import TipBox from '@site/src/components/TipBox';
import GlossaryTooltip from '@site/src/components/GlossaryTooltip';
import StepCard from '@site/src/components/StepCard';
import AnimatedSection from '@site/src/components/AnimatedSection';

const components = {
  ...MDXComponents,
  TipBox,
  GlossaryTooltip,
  StepCard,
  AnimatedSection,
} satisfies MDXComponentsObject;

export default components;
