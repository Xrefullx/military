--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: table1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table1 (
    idnum integer NOT NULL,
    chief text,
    "deputyChief" text,
    "deputyChiefUNR" text,
    "deputyChiefArmament" text,
    "deputyChiefRear" text,
    "isAdmin" integer,
    f_users integer,
    "Id_users_answer" integer,
    "deputyChiefVPR" text
);


ALTER TABLE public.table1 OWNER TO postgres;

--
-- Name: table10; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table10 (
    idnum integer NOT NULL,
    f_users integer,
    "isAdmin" integer,
    f_users_answer integer,
    "recruitmentPlan" text,
    "inTotal" text,
    "fromAmongTheMilitaryPersonnel" text,
    "fromAmongTheCadets" text,
    "fromAmongTheGP" text,
    "Note" text
);


ALTER TABLE public.table10 OWNER TO postgres;

--
-- Name: table9.1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."table9.1" (
    idnum integer NOT NULL,
    "isAdmin" integer,
    f_users integer,
    f_user_answer integer,
    "MilitaryRank" text,
    "PeopleName" text,
    "Circumstances" text
);


ALTER TABLE public."table9.1" OWNER TO postgres;

--
-- Name: table10_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."table9.1" ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table10_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table11; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table11 (
    idnum integer NOT NULL,
    "SeniorTeam" text,
    "CountPeople" text,
    "TheRouteOfTheRoute" text,
    "TheTimingOfTheMovement" text,
    "DateOfSwearingIn" text,
    "isAdmin" integer,
    f_users integer,
    f_users_answer integer
);


ALTER TABLE public.table11 OWNER TO postgres;

--
-- Name: table11_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table10 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table11_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table12; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table12 (
    idnum integer NOT NULL,
    "Division" text,
    "FIO" text,
    "PurposeOfArrival" text,
    "Deadlines" text,
    "CountPeople" text,
    "isAdmin" integer,
    f_users integer,
    f_users_answer integer,
    "Note" text
);


ALTER TABLE public.table12 OWNER TO postgres;

--
-- Name: table12_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table11 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table12_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table13; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table13 (
    idnum integer NOT NULL,
    "Division" text,
    "OnTheRoad" text,
    "OnTheWay" text,
    "isAdmin" integer,
    f_users integer,
    f_users_answer integer
);


ALTER TABLE public.table13 OWNER TO postgres;

--
-- Name: table13_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table12 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table13_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table14_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table13 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table14_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table1_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table1 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table1_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table2 (
    idnum integer NOT NULL,
    event text,
    "eventDates" text,
    "eventDetails" text,
    "personnelCount" text,
    "isAdmin" integer,
    id_users integer,
    id_answer_users integer
);


ALTER TABLE public.table2 OWNER TO postgres;

--
-- Name: table2.1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."table2.1" (
    idnum integer NOT NULL,
    event2 text,
    "eventDates2" text,
    "eventDetails2" text,
    "personnelCount2" text,
    "Is_admin" integer,
    f_users integer,
    id_users_answer integer
);


ALTER TABLE public."table2.1" OWNER TO postgres;

--
-- Name: table2_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table2 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table2_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table3_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."table2.1" ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table3_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table4; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table4 (
    idnum integer NOT NULL,
    "TheFieldOfActivity" text,
    "positionTitle" text,
    "kolVoLS" text,
    is_admin integer,
    f_users integer,
    f_users_answer integer,
    "datesLocation" text
);


ALTER TABLE public.table4 OWNER TO postgres;

--
-- Name: table4_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table4 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table4_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table5 (
    idnum integer NOT NULL,
    "DivisionOrganization" text,
    "FIOStarshy" text,
    "TypeOfPractice" text,
    "DatesAndVenue" text,
    "QuantityOfLs4" text,
    "AdditionalInformation" text,
    "isAdmin" integer,
    f_users integer,
    f_users_answer integer
);


ALTER TABLE public.table5 OWNER TO postgres;

--
-- Name: table5_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table5 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table5_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table6; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table6 (
    idnum integer NOT NULL,
    "DivisionOrganizationTable5" text,
    "FIOStarshyTable5" text,
    "ThePurposeOfTheBusinessTripTable5" text,
    "DatesAndVenueTable5" text,
    "QuantityOfLsTable5" text,
    "AdditionalInformationTable5" text,
    "isAdmin" integer,
    f_users integer,
    f_users_answer integer
);


ALTER TABLE public.table6 OWNER TO postgres;

--
-- Name: table6_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table6 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table6_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: table9; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.table9 (
    idnum integer NOT NULL,
    f_users integer,
    f_users_answer integer,
    "isAdmin" integer,
    "dayTotal" integer,
    "dayORZ" integer,
    "dayPneumonia" integer,
    "soldiersHospitalTotal" integer,
    "soldiersHospitalORZ" integer,
    "soldiersHospitalPneumonia" integer,
    "cadetsHospitalTotal" integer,
    "cadetsHospitalORZ" integer,
    "cadetsHospitalPneumonia" integer,
    "soldiersStationaryTotal" integer,
    "soldiersORZ" integer,
    "soldiersPneumonia" integer,
    "cadetsStationaryTotal" integer,
    "cadetsORZ" integer,
    "cadetsPneumonia" integer,
    "totalTotal" integer,
    "totalORZ" integer,
    "totalPneumonia" integer
);


ALTER TABLE public.table9 OWNER TO postgres;

--
-- Name: table9_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.table9 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table9_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: text6; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.text6 (
    idnum integer NOT NULL,
    "energyDeviationHeat" text,
    "energyDeviationWater" text,
    "energyDeviationPower" text,
    f_users integer,
    f_users_answer integer,
    is_admin integer
);


ALTER TABLE public.text6 OWNER TO postgres;

--
-- Name: text6_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.text6 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.text6_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: text7; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.text7 (
    idnum integer NOT NULL,
    "StateOfLawAndOrderAndMilitaryDiscipline" text,
    f_users integer,
    is_admin integer,
    f_users_answer integer
);


ALTER TABLE public.text7 OWNER TO postgres;

--
-- Name: text7_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.text7 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.text7_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: text8; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.text8 (
    idnum integer NOT NULL,
    "InformationAboutOfficials" text,
    f_users integer,
    is_admin integer,
    f_users_answer integer
);


ALTER TABLE public.text8 OWNER TO postgres;

--
-- Name: text8_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.text8 ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.text8_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: textFromServer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."textFromServer" (
    idnum integer NOT NULL,
    obstanovka text,
    f_users integer,
    f_users_answer integer,
    s_date text
);


ALTER TABLE public."textFromServer" OWNER TO postgres;

--
-- Name: textFromServer_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."textFromServer" ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."textFromServer_idnum_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    idnum integer NOT NULL,
    login text,
    password text,
    is_admin integer,
    s_fio text,
    s_text text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: usersAnswer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."usersAnswer" (
    idnum integer NOT NULL,
    f_users integer,
    d_create timestamp with time zone,
    id_answer integer NOT NULL,
    is_complete integer,
    d_finish timestamp with time zone
);


ALTER TABLE public."usersAnswer" OWNER TO postgres;

--
-- Name: usersAnswer_id_answer_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."usersAnswer" ALTER COLUMN id_answer ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."usersAnswer_id_answer_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: usersAnswer_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."usersAnswer" ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."usersAnswer_idnum_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users_idnum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN idnum ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_idnum_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: table1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table1 (idnum, chief, "deputyChief", "deputyChiefUNR", "deputyChiefArmament", "deputyChiefRear", "isAdmin", f_users, "Id_users_answer", "deputyChiefVPR") FROM stdin;
11	2	2	2	2	2	\N	\N	16	2
12	2	2	2	2	2	\N	1	16	2
13	2	2	2	2	2	\N	2	16	2
14	2	2	2	2	2	\N	2	16	2
15	123	123	123	123	123	\N	2	16	123
16	123	123	123	123	123	\N	2	16	123
17	test1	test1	test1	test1	test1	\N	2	22	test1
18	test1	test1	test1	test1	test1	\N	2	22	test1
19	тест1	тест1	тест1	тест1	тест1	\N	3	23	тест1
20	тест1	тест1	тест1	тест1	тест1	\N	3	23	тест1
21	test2	test2	test2	test2	test2	\N	2	24	test2
22	test2	test2	test2	test2	test2	\N	2	24	test2
23	test3	test3	test3	test3	test3	\N	2	25	test3
24	test3	test3	test3	test3	test3	\N	2	25	test3
25	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26	qweqweqwewq
26	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26	qweqweqwewq
\.


--
-- Data for Name: table10; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table10 (idnum, f_users, "isAdmin", f_users_answer, "recruitmentPlan", "inTotal", "fromAmongTheMilitaryPersonnel", "fromAmongTheCadets", "fromAmongTheGP", "Note") FROM stdin;
1	2	\N	16		0	0	0	0	
2	2	\N	16		0	0	0	0	
4	2	\N	24	string	string	string	string	string	string
5	2	\N	22						
6	2	\N	24						
7	2	\N	22						
8	2	\N	21						
9	2	\N	25	test3	2	2	2	2	test3
10	2	\N	20	123	123	123	123	123	123
11	2	\N	26	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq
\.


--
-- Data for Name: table11; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table11 (idnum, "SeniorTeam", "CountPeople", "TheRouteOfTheRoute", "TheTimingOfTheMovement", "DateOfSwearingIn", "isAdmin", f_users, f_users_answer) FROM stdin;
1	\N	\N	\N	\N	\N	\N	2	21
2	\N	\N	\N	\N	\N	\N	2	16
3	\N	\N	\N	\N	\N	\N	2	16
5	\N	\N	\N	\N	\N	\N	2	24
6	\N	\N	\N	\N	\N	\N	2	22
7	\N	\N	\N	\N	\N	\N	2	24
8	\N	\N	\N	\N	\N	\N	2	22
9	\N	\N	\N	\N	\N	\N	2	21
10	\N	\N	\N	\N	\N	\N	2	25
11	\N	\N	\N	\N	\N	\N	2	20
12	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table12; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table12 (idnum, "Division", "FIO", "PurposeOfArrival", "Deadlines", "CountPeople", "isAdmin", f_users, f_users_answer, "Note") FROM stdin;
1		\N	\N	\N	\N	\N	2	21	\N
2		\N	\N	\N	\N	\N	2	16	\N
3		\N	\N	\N	\N	\N	2	16	\N
5	string	\N	\N	\N	\N	\N	2	24	\N
6		\N	\N	\N	\N	\N	2	22	\N
7		\N	\N	\N	\N	\N	2	24	\N
8		\N	\N	\N	\N	\N	2	22	\N
9		\N	\N	\N	\N	\N	2	21	\N
10	test3	\N	\N	\N	\N	\N	2	25	\N
11	12312312	\N	\N	\N	\N	\N	2	20	\N
12	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26	qweqweqwewq
\.


--
-- Data for Name: table13; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table13 (idnum, "Division", "OnTheRoad", "OnTheWay", "isAdmin", f_users, f_users_answer) FROM stdin;
1				\N	2	21
3				\N	2	21
2				\N	2	16
5	string	string	string	\N	2	24
6				\N	2	22
7				\N	2	24
8				\N	2	22
9				\N	2	21
10	test3	test3	test3	\N	2	25
11	12312312	12312312	12312312	\N	2	20
12	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table2 (idnum, event, "eventDates", "eventDetails", "personnelCount", "isAdmin", id_users, id_answer_users) FROM stdin;
3					\N	2	16
4					\N	2	16
5					\N	2	16
7					\N	2	24
8					\N	2	22
9					\N	2	24
10					\N	2	22
11					\N	2	21
12	test3	test3	test3	test3	\N	2	25
13	test3	test3	test3	test3	\N	2	25
14	12312312	12312312	12312312	12312312	\N	2	20
15	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table2.1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."table2.1" (idnum, event2, "eventDates2", "eventDetails2", "personnelCount2", "Is_admin", f_users, id_users_answer) FROM stdin;
3					\N	2	16
4					\N	2	16
5					\N	2	16
7					\N	2	24
8					\N	2	22
9					\N	2	24
10					\N	2	22
11					\N	2	21
12	test3	test3	test3	test3	\N	2	25
13	12312312	12312312	12312312	12312312	\N	2	20
14	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table4 (idnum, "TheFieldOfActivity", "positionTitle", "kolVoLS", is_admin, f_users, f_users_answer, "datesLocation") FROM stdin;
1	13	15	16	\N	1	13	\N
2	17	19	20	\N	1	13	\N
3	1	3	4	\N	1	15	\N
4	9	11	12	\N	1	16	\N
5	2	2	2	\N	1	17	\N
6	2	2	2	\N	1	19	\N
7	2	2	2	\N	2	20	\N
8	123	123	123	\N	2	21	123
9	123	123	123	\N	2	21	123
10	test1	test1	test1	\N	2	22	test1
11	тест1	тест1	тест1	\N	3	23	тест1
12	test2	test2	test2	\N	2	24	test2
13	test3	test3	test3	\N	2	25	test3
14	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26	qweqweqwewq
\.


--
-- Data for Name: table5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table5 (idnum, "DivisionOrganization", "FIOStarshy", "TypeOfPractice", "DatesAndVenue", "QuantityOfLs4", "AdditionalInformation", "isAdmin", f_users, f_users_answer) FROM stdin;
3	\N	\N	\N	\N	\N	\N	\N	2	16
4	\N	\N	\N	\N	\N	\N	\N	2	16
5	\N	\N	\N	\N	\N	\N	\N	2	16
7	\N	\N	\N	\N	\N	\N	\N	2	24
8	\N	\N	\N	\N	\N	\N	\N	2	22
9	\N	\N	\N	\N	\N	\N	\N	2	24
10	\N	\N	\N	\N	\N	\N	\N	2	22
11	\N	\N	\N	\N	\N	\N	\N	2	21
12	\N	\N	\N	\N	\N	\N	\N	2	25
13	\N	\N	\N	\N	\N	\N	\N	2	25
14	\N	\N	\N	\N	\N	\N	\N	2	20
15	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table6 (idnum, "DivisionOrganizationTable5", "FIOStarshyTable5", "ThePurposeOfTheBusinessTripTable5", "DatesAndVenueTable5", "QuantityOfLsTable5", "AdditionalInformationTable5", "isAdmin", f_users, f_users_answer) FROM stdin;
3	\N	\N	\N	\N	\N	\N	\N	2	16
4	\N	\N	\N	\N	\N	\N	\N	2	16
5	\N	\N	\N	\N	\N	\N	\N	2	16
7	\N	\N	\N	\N	\N	\N	\N	2	24
8	\N	\N	\N	\N	\N	\N	\N	2	22
9	\N	\N	\N	\N	\N	\N	\N	2	24
10	\N	\N	\N	\N	\N	\N	\N	2	22
11	\N	\N	\N	\N	\N	\N	\N	2	21
12	\N	\N	\N	\N	\N	\N	\N	2	25
13	\N	\N	\N	\N	\N	\N	\N	2	20
14	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	qweqweqwewq	\N	2	26
\.


--
-- Data for Name: table9; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.table9 (idnum, f_users, f_users_answer, "isAdmin", "dayTotal", "dayORZ", "dayPneumonia", "soldiersHospitalTotal", "soldiersHospitalORZ", "soldiersHospitalPneumonia", "cadetsHospitalTotal", "cadetsHospitalORZ", "cadetsHospitalPneumonia", "soldiersStationaryTotal", "soldiersORZ", "soldiersPneumonia", "cadetsStationaryTotal", "cadetsORZ", "cadetsPneumonia", "totalTotal", "totalORZ", "totalPneumonia") FROM stdin;
3	2	21	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
4	2	16	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
6	2	24	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
7	2	22	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
8	2	24	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
9	2	22	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
10	2	21	\N	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
11	2	25	\N	4	2	2	10	5	5	10	5	5	10	5	5	10	5	5	44	22	22
12	2	20	\N	0	0	0	2	0	2	22	2	20	4	2	2	4	2	2	32	6	26
13	2	26	\N	0	0	0	4	2	2	4	2	2	4	2	2	2	2	0	14	8	6
\.


--
-- Data for Name: table9.1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."table9.1" (idnum, "isAdmin", f_users, f_user_answer, "MilitaryRank", "PeopleName", "Circumstances") FROM stdin;
2	\N	2	16	\N	\N	\N
3	\N	2	16	\N	\N	\N
4	\N	2	16	\N	\N	\N
6	\N	2	24	\N	\N	\N
7	\N	2	22	\N	\N	\N
8	\N	2	24	\N	\N	\N
9	\N	2	22	\N	\N	\N
10	\N	2	21	\N	\N	\N
11	\N	2	25	\N	\N	\N
12	\N	2	20	\N	\N	\N
13	\N	2	26	qweqweqwewq	qweqweqwewq	qweqweqwewq
\.


--
-- Data for Name: text6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.text6 (idnum, "energyDeviationHeat", "energyDeviationWater", "energyDeviationPower", f_users, f_users_answer, is_admin) FROM stdin;
3				2	16	\N
4				2	18	\N
6				2	24	\N
7				2	22	\N
8				2	24	\N
9				2	22	\N
10				2	21	\N
11	test3	test3	test3	2	25	\N
12	12312312	12312312	12312312	2	20	\N
13	qweqweqwewq	qweqweqwewq	qweqweqwewq	2	26	\N
\.


--
-- Data for Name: text7; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.text7 (idnum, "StateOfLawAndOrderAndMilitaryDiscipline", f_users, is_admin, f_users_answer) FROM stdin;
3		2	\N	21
4		2	\N	16
6		2	\N	24
7		2	\N	22
8		2	\N	24
9		2	\N	22
10		2	\N	21
11	test3	2	\N	25
12	12312312	2	\N	20
13	qweqweqwewq	2	\N	26
\.


--
-- Data for Name: text8; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.text8 (idnum, "InformationAboutOfficials", f_users, is_admin, f_users_answer) FROM stdin;
4		2	\N	21
3		2	\N	16
6		2	\N	24
7		2	\N	22
8		2	\N	24
9		2	\N	22
10		2	\N	21
11	test3	2	\N	25
12	12312312	2	\N	20
13	qweqweqwewq	2	\N	26
\.


--
-- Data for Name: textFromServer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."textFromServer" (idnum, obstanovka, f_users, f_users_answer, s_date) FROM stdin;
11	23	1	13	123112
13	1	1	15	1
14	1	1	16	2
15	2	1	17	2
17	2	1	19	2
18	2	2	20	2
19	123	2	21	123
20	test1	2	22	test1
21	тест1	3	23	тест1
22	test2	2	24	test2
23	test3	2	25	test3
24	qweqweqwewq	2	26	qweqweqwewq
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (idnum, login, password, is_admin, s_fio, s_text) FROM stdin;
1	1admin1	123zxcasd	1	Иванов Иван Иванович	Полковник
2	2particant2	2222qwe2222zxc	0	Сидоров Иван Иванович	Лейтенант
3	4particant4	4444qwe4444zxc	0	Tst Test Test	Рядовой
\.


--
-- Data for Name: usersAnswer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."usersAnswer" (idnum, f_users, d_create, id_answer, is_complete, d_finish) FROM stdin;
15	1	2024-02-18 14:49:21.39549+07	15	1	2024-02-19 23:15:13.607741+07
16	1	2024-02-18 14:56:40.786682+07	16	1	2024-02-19 23:15:13.607741+07
17	1	2024-02-18 17:25:12.611111+07	17	1	2024-02-19 23:15:13.607741+07
19	1	2024-02-18 17:29:28.503914+07	19	1	2024-02-19 23:15:13.607741+07
23	3	2024-02-20 02:20:31.328288+07	23	\N	\N
24	2	2024-02-20 02:32:57.699348+07	24	1	2024-02-18 02:48:25.568666+07
22	2	2024-02-20 02:19:13.890745+07	22	1	2024-02-18 02:48:52.729266+07
21	2	2024-02-18 19:24:55.637986+07	21	1	2024-02-18 02:51:01.608526+07
25	2	2024-02-20 02:53:23.124738+07	25	1	2024-02-20 02:54:30.15828+07
20	2	2024-02-18 18:07:45.025362+07	20	1	2024-02-20 21:55:04.894115+07
26	2	2024-02-20 22:04:54.770489+07	26	1	2024-02-20 22:05:53.909062+07
\.


--
-- Name: table10_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table10_idnum_seq', 13, true);


--
-- Name: table11_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table11_idnum_seq', 11, true);


--
-- Name: table12_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table12_idnum_seq', 12, true);


--
-- Name: table13_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table13_idnum_seq', 12, true);


--
-- Name: table14_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table14_idnum_seq', 12, true);


--
-- Name: table1_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table1_idnum_seq', 26, true);


--
-- Name: table2_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table2_idnum_seq', 15, true);


--
-- Name: table3_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table3_idnum_seq', 14, true);


--
-- Name: table4_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table4_idnum_seq', 14, true);


--
-- Name: table5_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table5_idnum_seq', 15, true);


--
-- Name: table6_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table6_idnum_seq', 14, true);


--
-- Name: table9_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.table9_idnum_seq', 13, true);


--
-- Name: text6_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.text6_idnum_seq', 13, true);


--
-- Name: text7_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.text7_idnum_seq', 13, true);


--
-- Name: text8_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.text8_idnum_seq', 13, true);


--
-- Name: textFromServer_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."textFromServer_idnum_seq"', 24, true);


--
-- Name: usersAnswer_id_answer_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."usersAnswer_id_answer_seq"', 26, true);


--
-- Name: usersAnswer_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."usersAnswer_idnum_seq"', 26, true);


--
-- Name: users_idnum_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_idnum_seq', 3, true);


--
-- Name: table9.1 table10_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."table9.1"
    ADD CONSTRAINT table10_pkey PRIMARY KEY (idnum);


--
-- Name: table10 table11_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table10
    ADD CONSTRAINT table11_pkey PRIMARY KEY (idnum);


--
-- Name: table11 table12_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table11
    ADD CONSTRAINT table12_pkey PRIMARY KEY (idnum);


--
-- Name: table12 table13_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table12
    ADD CONSTRAINT table13_pkey PRIMARY KEY (idnum);


--
-- Name: table13 table14_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table13
    ADD CONSTRAINT table14_pkey PRIMARY KEY (idnum);


--
-- Name: table1 table1_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table1
    ADD CONSTRAINT table1_pkey PRIMARY KEY (idnum);


--
-- Name: table2 table2_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table2
    ADD CONSTRAINT table2_pkey PRIMARY KEY (idnum);


--
-- Name: table2.1 table3_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."table2.1"
    ADD CONSTRAINT table3_pkey PRIMARY KEY (idnum);


--
-- Name: table4 table4_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table4
    ADD CONSTRAINT table4_pkey PRIMARY KEY (idnum);


--
-- Name: table5 table5_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table5
    ADD CONSTRAINT table5_pkey PRIMARY KEY (idnum);


--
-- Name: table6 table6_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table6
    ADD CONSTRAINT table6_pkey PRIMARY KEY (idnum);


--
-- Name: table9 table9_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.table9
    ADD CONSTRAINT table9_pkey PRIMARY KEY (idnum);


--
-- Name: text6 text6_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.text6
    ADD CONSTRAINT text6_pkey PRIMARY KEY (idnum);


--
-- Name: text7 text7_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.text7
    ADD CONSTRAINT text7_pkey PRIMARY KEY (idnum);


--
-- Name: text8 text8_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.text8
    ADD CONSTRAINT text8_pkey PRIMARY KEY (idnum);


--
-- Name: textFromServer textFromServer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."textFromServer"
    ADD CONSTRAINT "textFromServer_pkey" PRIMARY KEY (idnum);


--
-- Name: usersAnswer usersAnswer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."usersAnswer"
    ADD CONSTRAINT "usersAnswer_pkey" PRIMARY KEY (idnum);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (idnum);


--
-- PostgreSQL database dump complete
--

