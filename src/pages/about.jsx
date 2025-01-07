import { Link } from "react-router-dom";
import { GithubIcon, InstagramIcon } from "lucide-react";

import BaseLayout from "@/layouts/base.layout";

export default function About() {
  const developerProfile = [
    {
      name: "Fakhirul Akmal",
      role: "Backend Developer",
      picture: "https://avatars.githubusercontent.com/fakhirula",
      github: "https://github.com/fakhirula",
      instagram: "https://instagram.com/fakhirula",
    },
    {
      name: "Rama Fajar Fadillah",
      role: "DevOps Engineer",
      picture: "https://avatars.githubusercontent.com/nullsec45",
      github: "https://github.com/nullsec45",
      instagram: "https://instagram.com/fakhirula",
    },
    {
      name: "Aliyah Qulbinisa S",
      role: "Data Engineer",
      picture: "https://avatars.githubusercontent.com/fakhirula",
      github: "https://github.com/fakhirula",
      instagram: "https://instagram.com/fakhirula",
    },
    {
      name: "Nelan",
      role: "Frontend Developer",
      picture: "https://avatars.githubusercontent.com/nelanjoe",
      github: "https://github.com/nelanjoe",
      instagram: "https://instagram.com/nelan_17",
    },
  ];

  return (
    <BaseLayout>
      <section className="max-w-6xl px-4 py-12 mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center gap-3 mb-10">
          <h2 className="text-2xl font-semibold text-center">
            Profil Pengembang
          </h2>

          <div className="bg-primary rounded-full w-32 h-[2px]"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {developerProfile.map((profile) => (
            <div key={profile.name} className="flex flex-row gap-4">
              <img
                src={`${profile.picture}`}
                className="object-cover bg-cover rounded-md w-36 h-36"
                loading="lazy"
              />
              <div className="p-4 space-y-3">
                <div>
                  <h2 className="font-semibold">{profile.name}</h2>
                  <h2>{profile.role}</h2>
                </div>
                <div className="flex flex-row gap-4">
                  <Link to={profile.github}>
                    <div className="p-3 transition-all duration-150 ease-in border rounded-md hover:bg-slate-100">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link to={profile.instagram}>
                    <div className="p-3 transition-all duration-150 ease-in border rounded-md hover:bg-slate-100">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}
