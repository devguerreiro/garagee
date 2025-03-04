import {
  BuildingIcon,
  CalendarClockIcon,
  HouseIcon,
  ParkingCircleIcon,
  RadarIcon,
  UmbrellaIcon,
} from "lucide-react";

import { BookingDetailDTO } from "@/app/dtos";

import {
  createBookingDateTime,
  getAbbreviationName,
  getBookingStatusBadgeVariant,
} from "@/utils";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = {
  booking: BookingDetailDTO;
};

export default function BookingDetail({ booking }: Readonly<Props>) {
  const { parkingSpace } = booking;

  return (
    <div className="p-6 mb-32 bg-card shadow rounded text-sm text-muted-foreground space-y-6">
      <div className="flex justify-between items-center text-xl">
        <div className="flex items-center gap-2 text-primary">
          <ParkingCircleIcon className="w-[1em] h-[1em]" />
          <h2 className="font-medium">{parkingSpace.identifier}</h2>
        </div>
        <Badge variant={getBookingStatusBadgeVariant(booking.status)}>
          {booking.status}
        </Badge>
      </div>
      <hr />
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-primary">Sobre a reserva</h3>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <CalendarClockIcon className="w-[1em] h-[1em]" />
            <span className="block">Início</span>
          </div>
          <div>
            <strong>
              {createBookingDateTime(booking.from_date, booking.from_hour)}
            </strong>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <CalendarClockIcon className="w-[1em] h-[1em]" />
            <span className="block">Fim</span>
          </div>
          <div>
            <strong>
              {createBookingDateTime(booking.to_date, booking.to_hour)}
            </strong>
          </div>
        </div>
      </div>
      <hr />
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-primary">Sobre a vaga</h3>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <BuildingIcon className="w-[1em] h-[1em]" />
            <span className="block">Local</span>
          </div>
          <div>
            <strong>{parkingSpace.building.name}</strong>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <RadarIcon className="w-[1em] h-[1em]" />
            <span className="block">Orientação</span>
          </div>
          <div>
            <strong>{parkingSpace.guidance}</strong>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <UmbrellaIcon className="w-[1em] h-[1em]" />
            <span className="block">Coberta?</span>
          </div>
          <div>
            <strong>{parkingSpace.isCovered ? "Sim" : "Não"}</strong>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center gap-2 text-primary">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            {getAbbreviationName(parkingSpace.owner.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5 text-xs">
          <strong>{parkingSpace.owner.name}</strong>
          <div className="flex items-center gap-1">
            <HouseIcon className="text-primary w-[1em] h-[1em]" />
            <span>{parkingSpace.owner.apartment}</span>
          </div>
        </div>
      </div>
      <Button className="w-full !mt-12" variant="destructive">
        Cancelar reserva
      </Button>
    </div>
  );
}
