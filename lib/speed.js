export default function speed(session) {
    return session.data.distance / session.data.effduration;
}
