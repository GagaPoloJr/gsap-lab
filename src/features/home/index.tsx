import { laboratoryExperiments } from '@/data/laboratory';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="mb-5 text-2xl font-bold text-slate-100">GSAP Lab</h1>
      <div className="flex flex-col space-y-2">
        {laboratoryExperiments.map((lab) => (
          <div
            key={lab.slug}
            onClick={() => navigate(`/laboratory/${lab.slug}`)}
            className="cursor-pointer rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-200 hover:border-slate-600"
          >
            <h2 className="font-medium">{lab.title}</h2>
            <p className="text-sm text-slate-400">{lab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
