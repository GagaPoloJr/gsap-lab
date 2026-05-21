export interface LaboratoryExperiment {
  slug: string;
  title: string;
  description: string;
}

export const laboratoryExperiments: LaboratoryExperiment[] = [
  {
    slug: 'motion-fundamental',
    title: 'Motion Fundamental',
    description: 'Core concepts of motion, values, ease, and etc.',
  },
];
