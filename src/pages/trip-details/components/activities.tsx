import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { api } from "../../../lib/axios";

interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    api
      .get(`trip/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((day) => {
        return (
          <div key={day.date} className="space-y-2 5">
            <div className="flex gap-2 items-baseline">
              <span className="text-zinc-300 text-xl font-semibold">
                Dia {format(new Date(day.date), "d")}
              </span>
              <span className="text-xs text-zinc-500 ">
                {format(day.date, "EEEE", { locale: ptBR })}
              </span>
            </div>

            {day.activities.length ? (
              day.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="span-y-2.5 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                >
                  <CircleCheck className="size-5 text-line-300 " />
                  <span className="text-zinc-100">{activity.title}</span>
                  <span className="text-zinc-400 text-sm ml-auto">
                    {format(activity.occurs_at, "HH:mm")}h
                  </span>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
