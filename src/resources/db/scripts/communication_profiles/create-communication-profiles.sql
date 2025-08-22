DROP TABLE IF EXISTS public.communication_profiles;

CREATE TABLE public.communication_profiles (
    id varchar(10) NOT NULL,
    checksum_regex varchar(50) NULL,
    "type" varchar(20) NULL,
    CONSTRAINT communication_profiles_pkey PRIMARY KEY (id)
);

-- Scripts de inserción para la tabla communication_profiles

-- Insertar perfiles de comunicación
INSERT INTO public.communication_profiles (id, checksum_regex, "type") VALUES
-- HL7 Type parsers
('HL7-1', '\x1C', 'HL7'),                    -- CONTROLAB, FINECARE_PLUS, MINDRAY_BC20S, SWELAB, DYMIND, MINDRAY_BS120

-- XML parser
('XML-1', '<!--:End:Chksum:\d+(:\d+)*:-->', 'XML'),  -- SWELAB_PLUS

-- FJT1 (Formato especial para equipos específicos)
('FJD-1', '\x03', 'FJD-1'),      -- FUJIFILM_DRICHEM_NX600 type-1

-- A15 parser
('A15-1', '', 'A15'),                        -- A15 (sin delimitador)

-- CM200 parser
('CM200-1', '', 'CM200'),                    -- CM200 (sin delimitador)

-- SPRU120 parser
('SPRU120-1', '[\n\r]+\s*GLU\s+.+?(?=[\n\r]|$)', 'SPRU120'),  -- SP_U120

-- Vitros350 (ya incluido arriba como FJT1, pero si necesitas un tipo específico)
('Vitros350-1', '!\d{3}h\d{4}[A-F0-9]{2}', 'Vitros350');  -- VITROS_350

-- Verificar los datos insertados
SELECT * FROM public.communication_profiles ORDER BY type, id;