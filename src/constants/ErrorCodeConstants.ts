const COMMON = 'E01';

const GENERAL = '01';
const SECURITY = '02';
const AWS = '03';
const INTERNAL = '04';

const COMMON_BAD_REQUEST = `${COMMON}_${GENERAL}_001`; // E01_01_001
const COMMON_PATH_NOT_FOUND = `${COMMON}_${GENERAL}_002`; // E01_01_002
const COMMON_UNAUTHORISED = `${COMMON}_${GENERAL}_003`; // E01_01_003
const COMMON_NOT_ACCEPTED = `${COMMON}_${GENERAL}_004`; // E01_01_004

const COMMON_JWT_TOKEN_MISSING = `${COMMON}_${SECURITY}_001`; // E01_02_001
const COMMON_JWT_TOKEN_INVALID = `${COMMON}_${SECURITY}_002`; // E01_02_002

const COMMON_JWT_UNINITIALISED = `${COMMON}_${INTERNAL}_001`; // E01_04_001

const COMMON_AWS_ERROR = `${COMMON}_${AWS}_001`; // E01_03_001

export {
	COMMON_BAD_REQUEST,
	COMMON_PATH_NOT_FOUND,
	COMMON_UNAUTHORISED,
	COMMON_NOT_ACCEPTED,
	COMMON_JWT_TOKEN_MISSING,
	COMMON_JWT_TOKEN_INVALID,
	COMMON_JWT_UNINITIALISED,
	COMMON_AWS_ERROR,
};