import React from "react";
import { useParams } from "react-router-dom";
import BALON from "../assets/images/pelota.jpg";

const Fixture = ({ data }) => {
  const params = useParams();

  const matchID = params.matchID;

  const results = data.response.filter((match) => {
    return match.fixture.id == matchID;
  });

  const fixture = results[0];
  return (
    <div className="bg-white pb-10">
      <div className="bg-white p-2">
        <div align="center">
          <img src={fixture.league.logo} width={25} alt={fixture.league.name} />
          {fixture.league.name}
        </div>

        <div className="text-center">{fixture.fixture.status.long}</div>

        <div className="w-full flex p-1">
          <div className="w-[10%]" align="center">
            <img
              src={fixture.teams.home.logo}
              width={30}
              alt={fixture.teams.home.name}
            />
          </div>

          <div className="w-[32%] text-right">{fixture.teams.home.name}</div>

          <div className="w-[16%] text-center">
            {fixture.goals.home} : {fixture.goals.away}
          </div>

          <div className="w-[32%] text-left">{fixture.teams.away.name}</div>

          <div className="w-[10%]" align="center">
            <img
              src={fixture.teams.away.logo}
              width={30}
              alt={fixture.teams.away.name}
            />
          </div>
        </div>

        <div className="text-center text-green-600">
          {fixture.fixture.status.elapsed}`
        </div>
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl">Eventos</h1>

        {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div
                className="p-5"
                key={`${event.team.id}-${event.time.elapsed}`}
              >
                {event.type === "Goal" ? (
                  <div>
                    <img src={BALON} alt="GOAL" width={15} />
                  </div>
                ) : (
                  <div className="badge badge-secondary">{event.type}</div>
                )}{" "}
                {event.player.name}{" "}
                <img src={event.team.logo} width={20} />
                <br />
                <div className="text-green-700">{event.time.elapsed}`</div>
              </div>
            ))}
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl">Resultado</h1>

        <div className="p-2">
          Primer Tiempo
          <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Tiempo Completo
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Tiempo Extra
            <br />
            {fixture.score.fulltime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Penales
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl">
          Detalles del partido
        </h1>

        <div className="p-2">Estadio - {fixture.fixture.venue.name}</div>
        <div className="p-2">Pais - {fixture.league.country}</div>
        <div className="p-2">{fixture.league.round}</div>
        <div className="p-2">{fixture.league.season}</div>
      </div>

      <div className="text-center">
        <button className="btn btn-wide">Pagar para ver probabilidades en vivo</button>
      </div>
    </div>
  );
};

export default Fixture;
