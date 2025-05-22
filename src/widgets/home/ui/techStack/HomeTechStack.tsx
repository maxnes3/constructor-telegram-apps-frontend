import {
  DockerIcon,
  NestJsIcon,
  NodeJsIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactIcon,
  SwaggerIcon,
  TypescriptIcon,
  ViteJsIcon,
} from '@/shared/assets/icons';
import classes from './styles.module.scss';

const TECH_STACK_LIST = [
  {
    icon: <ReactIcon className={classes.icon} />,
    label: 'React.js',
  },
  {
    icon: <ViteJsIcon className={classes.icon} />,
    label: 'Vite.js',
  },
  {
    icon: <DockerIcon className={classes.icon} />,
    label: 'Docker',
  },
  {
    icon: <TypescriptIcon className={classes.icon} />,
    label: 'Typescript',
  },
  {
    icon: <NodeJsIcon className={classes.icon} />,
    label: 'Node.js',
  },
  {
    icon: <NestJsIcon className={classes.icon} />,
    label: 'Nest.js',
  },
  {
    icon: <PrismaIcon className={classes.icon} />,
    label: 'Prisma',
  },
  {
    icon: <PostgresqlIcon className={classes.icon} />,
    label: 'PostgreSQL',
  },
  {
    icon: <SwaggerIcon className={classes.icon} />,
    label: 'Swagger',
  },
];

export const HomeTechStack = () => {
  return (
    <footer className={classes.homeTechStack}>
      <h2 className={classes.title}>Project powered by</h2>
      <div className={classes.stack}>
        {TECH_STACK_LIST.map((tech) => (
          <div key={tech.label} className={classes.stackItem}>
            {tech.icon}
            <span className={classes.label}>{tech.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};
