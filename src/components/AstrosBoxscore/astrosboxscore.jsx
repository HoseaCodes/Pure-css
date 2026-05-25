import React from "react"
import "./astrosboxscore.css"

const ASTROS_NAME = "Houston Astros"
const ASTROS_TEAM_ID = 117

const teamAbbrevs = {
  "Arizona Diamondbacks": "ARI", "Atlanta Braves": "ATL", "Baltimore Orioles": "BAL",
  "Boston Red Sox": "BOS", "Chicago Cubs": "CHC", "Chicago White Sox": "CHW",
  "Cincinnati Reds": "CIN", "Cleveland Guardians": "CLE", "Colorado Rockies": "COL",
  "Detroit Tigers": "DET", "Houston Astros": "HOU", "Kansas City Royals": "KC",
  "Los Angeles Angels": "LAA", "Los Angeles Dodgers": "LAD", "Miami Marlins": "MIA",
  "Milwaukee Brewers": "MIL", "Minnesota Twins": "MIN", "New York Mets": "NYM",
  "New York Yankees": "NYY", "Philadelphia Phillies": "PHI",
  "Pittsburgh Pirates": "PIT", "San Diego Padres": "SD", "Seattle Mariners": "SEA",
  "San Francisco Giants": "SF", "St. Louis Cardinals": "STL", "Tampa Bay Rays": "TB",
  "Texas Rangers": "TEX", "Toronto Blue Jays": "TOR", "Washington Nationals": "WSH",
  "Athletics": "ATH", "Oakland Athletics": "ATH",
}

const getYesterdayDate = () => {
  const now = new Date()
  const y = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1))
  return y.toISOString().split("T")[0]
}

const formatDateHeader = (dateStr) => {
  const date = new Date(dateStr + "T12:00:00")
  return date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  })
}

const getAbbrev = (team) =>
  teamAbbrevs[team.name] || team.abbreviation || team.teamName || "---"

const isAstrosGame = (game) => {
  const a = game.teams?.away?.team
  const h = game.teams?.home?.team
  return (
    a?.name === ASTROS_NAME || h?.name === ASTROS_NAME ||
    a?.id === ASTROS_TEAM_ID || h?.id === ASTROS_TEAM_ID
  )
}

const getPitcherDisplayName = (person) => {
  if (!person) return "P"
  if (person.boxscoreName && person.boxscoreName.length > 1) return person.boxscoreName
  const fullName = person.fullName || ""
  if (!fullName) return "P"
  const parts = fullName.trim().split(/\s+/)
  if (parts.length >= 2) {
    const last = parts[parts.length - 1]
    if (/^(Jr|Sr|II|III|IV|V)$/i.test(last)) {
      return parts[parts.length - 2] + " " + last
    }
    return last
  }
  return fullName
}

const getPitcherLine = (player) => {
  if (!player?.stats?.pitching) return ""
  const p = player.stats.pitching
  const name = getPitcherDisplayName(player.person)
  const ip = Number(p.inningsPitched || 0).toFixed(1)
  return `${name} (${ip} IP, ${p.earnedRuns || 0}ER, ${p.strikeOuts || 0}K)`
}

const getTopBatter = (players) => {
  let top = null
  let best = -1
  Object.values(players || {}).forEach((p) => {
    const b = p.stats?.batting
    if (!b || !b.hits) return
    const score = (b.hits || 0) * 2 + (b.rbi || 0)
    if (score > best) {
      best = score
      top = `${p.person?.boxscoreName || "Player"} (${b.hits}H, ${b.rbi || 0}RBI)`
    }
  })
  return top
}

const Linescore = ({ data, awayAbbrev, homeAbbrev }) => {
  if (!data?.innings) return null
  const a = data.teams.away
  const h = data.teams.home
  return (
    <table className="asb-linescore">
      <thead>
        <tr>
          <th>&nbsp;</th>
          {data.innings.map((i) => (
            <th key={`h-${i.num}`}>{i.num}</th>
          ))}
          <th className="asb-totals">R</th>
          <th className="asb-totals">H</th>
          <th className="asb-totals">E</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{awayAbbrev}</td>
          {data.innings.map((i) => (
            <td key={`a-${i.num}`}>{i.away?.runs ?? "-"}</td>
          ))}
          <td className="asb-runs">{a.runs}</td>
          <td>{a.hits}</td>
          <td>{a.errors}</td>
        </tr>
        <tr>
          <td>{homeAbbrev}</td>
          {data.innings.map((i) => (
            <td key={`hh-${i.num}`}>{i.home?.runs ?? "-"}</td>
          ))}
          <td className="asb-runs">{h.runs}</td>
          <td>{h.hits}</td>
          <td>{h.errors}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Standouts = ({ boxData, awayAbbrev, homeAbbrev }) => {
  if (!boxData?.teams) return null
  const awayTop = getTopBatter(boxData.teams.away.players)
  const homeTop = getTopBatter(boxData.teams.home.players)
  if (!awayTop && !homeTop) return null
  return (
    <div className="asb-standouts">
      {awayTop && <div><strong>{awayAbbrev}</strong>: {awayTop}</div>}
      {homeTop && <div><strong>{homeAbbrev}</strong>: {homeTop}</div>}
    </div>
  )
}

const Decisions = ({ game, boxData }) => {
  if (!game?.decisions || !boxData?.teams) return null
  const allPlayers = { ...boxData.teams.away.players, ...boxData.teams.home.players }
  const findPlayer = (d) => {
    if (!d?.id) return null
    const idStr = String(d.id)
    return allPlayers[`ID${idStr}`] || allPlayers[idStr]
  }
  const lineFor = (d) => {
    const player = findPlayer(d)
    return player ? getPitcherLine(player) : getPitcherDisplayName(d)
  }
  const { winner, loser, save } = game.decisions
  return (
    <div className="asb-decisions">
      {winner && <div><strong>W:</strong> {lineFor(winner)}</div>}
      {loser && <div><strong>L:</strong> {lineFor(loser)}</div>}
      {save && <div><strong>S:</strong> {lineFor(save)}</div>}
    </div>
  )
}

const GameCard = ({ game, boxData, lineData }) => {
  const away = game.teams.away
  const home = game.teams.home
  const awayAbbrev = getAbbrev(away.team)
  const homeAbbrev = getAbbrev(home.team)
  const awayScore = away.score || 0
  const homeScore = home.score || 0
  const isHomeWin = homeScore > awayScore
  const astrosWon =
    (home.team.name === ASTROS_NAME && isHomeWin) ||
    (away.team.name === ASTROS_NAME && !isHomeWin)

  return (
    <div className="asb-game">
      <div className="asb-card">
        <div className="asb-score-row">
          <div className="asb-teams">
            {away.team.name}<br />
            <span className="asb-record">
              ({away.leagueRecord?.wins || 0}-{away.leagueRecord?.losses || 0})
            </span><br />
            {home.team.name}<br />
            <span className="asb-record">
              ({home.leagueRecord?.wins || 0}-{home.leagueRecord?.losses || 0})
            </span>
          </div>
          <div className="asb-scores">
            <div className={`asb-score-away ${isHomeWin ? "asb-loss" : "asb-win"}`}>
              {awayScore}
            </div>
            <div className={`asb-score-home ${isHomeWin ? "asb-win" : "asb-loss"}`}>
              {homeScore}
            </div>
          </div>
        </div>

        <div className="asb-result">
          <strong>HOU {astrosWon ? "W" : "L"}</strong>
        </div>

        <Linescore data={lineData} awayAbbrev={awayAbbrev} homeAbbrev={homeAbbrev} />
        <Standouts boxData={boxData} awayAbbrev={awayAbbrev} homeAbbrev={homeAbbrev} />
        <Decisions game={game} boxData={boxData} />

        <div className="asb-final">
          FINAL • {game.venue.name}
        </div>
      </div>
    </div>
  )
}

const AstrosBoxscore = () => {
  const date = React.useMemo(() => getYesterdayDate(), [])
  const [games, setGames] = React.useState([])
  const [status, setStatus] = React.useState("loading")

  React.useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const schedRes = await fetch(
          `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${date}&teamId=${ASTROS_TEAM_ID}&hydrate=decisions`
        )
        const sched = await schedRes.json()
        const all = sched.dates?.[0]?.games || []
        const filtered = all.filter(isAstrosGame)

        if (filtered.length === 0) {
          if (!cancelled) {
            setGames([])
            setStatus("empty")
          }
          return
        }

        const enriched = await Promise.all(
          filtered.map(async (game) => {
            const [boxData, lineData] = await Promise.all([
              fetch(`https://statsapi.mlb.com/api/v1/game/${game.gamePk}/boxscore`)
                .then((r) => (r.ok ? r.json() : null)),
              fetch(`https://statsapi.mlb.com/api/v1/game/${game.gamePk}/linescore`)
                .then((r) => (r.ok ? r.json() : null)),
            ])
            return { game, boxData, lineData }
          })
        )

        if (!cancelled) {
          setGames(enriched)
          setStatus("ready")
        }
      } catch (e) {
        if (!cancelled) setStatus("error")
      }
    }

    load()
    return () => { cancelled = true }
  }, [date])

  return (
    <div className="asb-root">
      <div className="asb-wrap">
        <div className="asb-header">
          <h1 className="asb-title">ASTROS BOXSCORE</h1>
          <div className="asb-date">{formatDateHeader(date)}</div>
        </div>

        <div className="asb-content">
          {status === "loading" && (
            <p className="asb-empty">Loading…</p>
          )}
          {status === "empty" && (
            <p className="asb-empty">Astros did not play yesterday.</p>
          )}
          {status === "error" && (
            <p className="asb-error">Error loading data.</p>
          )}
          {status === "ready" && games.map(({ game, boxData, lineData }) => (
            <GameCard
              key={game.gamePk}
              game={game}
              boxData={boxData}
              lineData={lineData}
            />
          ))}
        </div>

        <div className="asb-footer">
          Yesterday's Houston Astros Box Score • Data from MLB Stats API • Fan project
        </div>
      </div>
    </div>
  )
}

export default AstrosBoxscore
