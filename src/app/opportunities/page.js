import { Header } from '../components/header';

export default function Opportunities() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24 thistle-background">
        <h1>This is the opportunities page</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Frequency</th>
              <th>Points</th>
              <th>Hours</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hope Foundation</td>
              <td>Weekly</td>
              <td>8</td>
              <td>5</td>
              <td>Social</td>
            </tr>
            <tr>
              <td>Unity Outreach</td>
              <td>Monthly</td>
              <td>7</td>
              <td>8</td>
              <td>Solitude</td>
            </tr>
            <tr>
              <td>Compassion Care</td>
              <td>One-off</td>
              <td>6</td>
              <td>4</td>
              <td>Social</td>
            </tr>
            <tr>
              <td>Empowerment Alliance</td>
              <td>Weekly</td>
              <td>9</td>
              <td>7</td>
              <td>Solitude</td>
            </tr>
            <tr>
              <td>Community Builders</td>
              <td>Monthly</td>
              <td>5</td>
              <td>6</td>
              <td>Social</td>
            </tr>
            <tr>
              <td>Kindness Coalition</td>
              <td>One-off</td>
              <td>8</td>
              <td>3</td>
              <td>Solitude</td>
            </tr>
            <tr>
              <td>Supportive Services</td>
              <td>Weekly</td>
              <td>7</td>
              <td>9</td>
              <td>Social</td>
            </tr>
            <tr>
              <td>Care Connections</td>
              <td>Monthly</td>
              <td>6</td>
              <td>5</td>
              <td>Solitude</td>
            </tr>
            <tr>
              <td>Dignity for All</td>
              <td>One-off</td>
              <td>9</td>
              <td>8</td>
              <td>Social</td>
            </tr>
            <tr>
              <td>Harmony Haven</td>
              <td>Weekly</td>
              <td>7</td>
              <td>6</td>
              <td>Solitude</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
