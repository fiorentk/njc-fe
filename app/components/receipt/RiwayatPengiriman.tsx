import { useMemo } from 'react';
import { ResiData } from '@/app/resi/[resi]/types';

export interface RiwayatPengirimanProps {
  data: ResiData['data'];
}

export default function RiwayatPengiriman({ data }: RiwayatPengirimanProps) {
  const { groups, dateOrder } = useMemo(() => {
    const sorted = [...data.connote_progress].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    const groups: Record<string, typeof sorted> = {};
    const dateOrder: string[] = [];

    sorted.forEach((event) => {
      const date = new Date(event.timestamp);
      const iso = date.toISOString();
      const dateKey = iso.substring(0, iso.indexOf('T'));

      if (!groups[dateKey]) {
        groups[dateKey] = [];
        dateOrder.push(dateKey);
      }
      groups[dateKey]!.push(event);
    });

    return { groups, dateOrder };
  }, [data.connote_progress]);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('id-ID', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const totalEvents = dateOrder.reduce((acc, k) => acc + (groups[k]?.length ?? 0), 0);
  let eventCounter = 0;

  return (
    <div
      className="bg-white rounded-[20px] border border-gray-100 p-6 lg:min-h-[600px]"
      data-skip-export="true"
    >
      <div className="sticky top-0 bg-white z-10 pb-4">
        <h2 className="font-bold text-lg text-posBlue mb-1">Riwayat Pengiriman</h2>
        <p className="text-gray-500 text-sm">
          Total {totalEvents} aktivitas tercatat
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4 overflow-y-auto lg:max-h-[520px]">
        <div className="flex flex-col gap-6 pr-2">
          {dateOrder.map((dateKey) => {
            const events = groups[dateKey] ?? [];
            return (
              <div key={dateKey} className="flex flex-col gap-3">
                <div className="text-posBlue text-sm font-bold">
                  {formatDate(events[0]?.timestamp ?? '')}
                </div>

                <div className="flex flex-col gap-3">
                  {events.map((event, index) => {
                    eventCounter++;
                    const isFirst = eventCounter === 1;
                    const isLastEvent = eventCounter === totalEvents;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
                              isFirst ? 'bg-posOrange' : 'bg-posBlue'
                            }`}
                          />
                          {!isLastEvent && (
                            <div className="w-px border-l border-dashed border-gray-300 flex-1 min-h-[20px]" />
                          )}
                        </div>

                        <div className="flex flex-col pb-2">
                          <span className="text-gray-400 text-xs font-medium">
                            {formatTime(event.timestamp)}
                          </span>
                          <p
                            className={`text-sm ${
                              isFirst
                                ? 'text-posOrange font-bold'
                                : 'text-posBlue font-medium'
                            }`}
                          >
                            {event.progress_state}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
