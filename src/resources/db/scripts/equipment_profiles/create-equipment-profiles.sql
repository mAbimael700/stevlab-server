-- public.equipment_profiles definition

-- Drop table

DROP TABLE IF EXISTS public.equipment_profiles;

CREATE TABLE public.equipment_profiles (
	id int8 NOT NULL,
	communication_profile varchar(10) NULL,
	"name" varchar(25) NULL,
	active bool NULL,
	communication_type varchar(25) NULL,
	CONSTRAINT equipment_profiles_pkey PRIMARY KEY (id),
	CONSTRAINT fk_equipment_profiles_communication_profile_communication_pr FOREIGN KEY (communication_profile) REFERENCES public.communication_profiles(id)
);

-- Scripts de inserción para la tabla equipment_profiles
-- Basado en los equipos del código JavaScript y los communication_profiles creados

-- Insertar perfiles de equipos
INSERT INTO public.equipment_profiles (id, communication_profile, name, active, communication_type) VALUES

-- Equipos HL7
(1, 'HL7-1', 'Controlab', true, 'TcpInbound'),
(2, 'HL7-1', 'Wondfo Finecare Plus', true, 'TcpInbound'),
(3, 'HL7-1', 'Dymind DH36', true, 'TcpInbound'),
(4, 'HL7-1', 'Mindray BS-120', true, 'TcpInbound'),
(5, 'HL7-1', 'Sweblab Lumi', true, 'TcpInbound'),
(6, 'HL7-1', 'Mindray BC-20s', true, 'TcpOutbound'),

(7, 'FJD-1', 'Fujifilm Drimchem NX600', true, 'TcpInbound'),

-- Equipos XML
(8, 'XML-1', 'Swelab plus', true, 'Serial'),
(9, 'XML-1', 'Swelab alfa', true, 'Serial'),

-- Equipos Vitros350/FJT1
(10, 'Vitros350-1', 'Vitros 350', true, 'Serial'),

-- Equipos A15
(11, 'A15-1', 'BioSystems A15', true, 'Serial'),
(12, 'A15-1', 'BioSystems A25', true, 'Serial'),

-- Equipos CM200
(13, 'CM200-1', 'Wiener Lab Group CM200', true, 'Serial'),

-- Equipos SPRU120
(14, 'SPRU120-1', 'Spinreact U-120', true, 'Serial');

-- Verificar los datos insertados con información del communication_profile
SELECT 
    ep.id,
    ep.name,
    ep.communication_profile,
    cp.type as profile_type,
    cp.checksum_regex,
    ep.active,
    ep.communication_type
FROM public.equipment_profiles ep
LEFT JOIN public.communication_profiles cp ON ep.communication_profile = cp.id
ORDER BY ep.id;

-- Consulta para ver equipos por tipo de comunicación
SELECT 
    cp.type as profile_type,
    COUNT(*) as equipment_count,
    STRING_AGG(ep.name, ', ') as equipment_names
FROM public.equipment_profiles ep
LEFT JOIN public.communication_profiles cp ON ep.communication_profile = cp.id
GROUP BY cp.type
ORDER BY cp.type;