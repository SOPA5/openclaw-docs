import MDXComponents from '@theme-original/MDXComponents';
import type { MDXComponentsObject } from '@theme/MDXComponents';
import TipBox from '@site/src/components/TipBox';
import GlossaryTooltip from '@site/src/components/GlossaryTooltip';
import StepCard from '@site/src/components/StepCard';
import AnimatedSection from '@site/src/components/AnimatedSection';
import ProgressPill from '@site/src/components/ProgressPill';
import LearningPath from '@site/src/components/LearningPath';
import InfoCard from '@site/src/components/InfoCard';
import ComparisonGrid from '@site/src/components/ComparisonGrid';

const components = {
  ...MDXComponents,
  TipBox,
  GlossaryTooltip,
  StepCard,
  AnimatedSection,
  ProgressPill,
  LearningPath,
  InfoCard,
  ComparisonGrid,
} satisfies MDXComponentsObject;

export default components;
