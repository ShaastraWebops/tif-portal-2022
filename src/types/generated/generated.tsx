import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTeamInput = {
  members?: Maybe<Array<MemberInput>>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemberInput = {
  city: Scalars['String'];
  contactno: Scalars['String'];
  email: Scalars['String'];
  institution: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type Mutation = {
  createTeamAndRegister: Scalars['Boolean'];
  fillProject: Scalars['Boolean'];
  getPasswordOTP: Scalars['Boolean'];
  leaveTeam: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  registerUser: Scalars['Boolean'];
  resendVerificationMail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  updateProject: Scalars['Boolean'];
  verifyUser: Scalars['String'];
};


export type MutationCreateTeamAndRegisterArgs = {
  data: CreateTeamInput;
};


export type MutationFillProjectArgs = {
  data: ProjectInput;
};


export type MutationGetPasswordOtpArgs = {
  email: Scalars['String'];
};


export type MutationLeaveTeamArgs = {
  data: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterUserArgs = {
  data: CreateUserInput;
};


export type MutationResendVerificationMailArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
};


export type MutationVerifyUserArgs = {
  otp: Scalars['String'];
};

export type Project = {
  Q1: Scalars['String'];
  Q2: Scalars['String'];
  Q3: Scalars['String'];
  Q4: Scalars['String'];
  Q5: Scalars['String'];
  Q6: Scalars['String'];
  Q7: Scalars['String'];
  category: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  videolink: Scalars['String'];
};

export type ProjectInput = {
  Q1: Scalars['String'];
  Q2: Scalars['String'];
  Q3: Scalars['String'];
  Q4: Scalars['String'];
  Q5: Scalars['String'];
  Q6: Scalars['String'];
  Q7: Scalars['String'];
  category: Scalars['String'];
  title: Scalars['String'];
  videolink: Scalars['String'];
};

export type Query = {
  exportCSV: Scalars['String'];
  getProjectbyteamId: Project;
  getProjects: Array<Project>;
  getTeamById: Team;
  getTeams: Array<Team>;
  getUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
};


export type QueryGetProjectbyteamIdArgs = {
  teamid: Scalars['String'];
};


export type QueryGetTeamByIdArgs = {
  teamid: Scalars['String'];
};

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  otp: Scalars['String'];
};

export type Team = {
  id: Scalars['ID'];
  members: Array<User>;
  name: Scalars['String'];
  project?: Maybe<Project>;
};

export type User = {
  city?: Maybe<Scalars['String']>;
  contactno?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  institution?: Maybe<Scalars['String']>;
  isSubmitted: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  name: Scalars['String'];
  passwordOTP?: Maybe<Scalars['String']>;
  role: UserRole;
  state?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Leader = 'LEADER',
  Member = 'MEMBER'
}

export type RegisterUserMutationVariables = Exact<{
  CreateUserInput: CreateUserInput;
}>;


export type RegisterUserMutation = { registerUser: boolean };

export type VerifyUserMutationVariables = Exact<{
  otp: Scalars['String'];
}>;


export type VerifyUserMutation = { verifyUser: string };

export type LoginMutationVariables = Exact<{
  LoginInput: LoginInput;
}>;


export type LoginMutation = { login?: Maybe<{ id: string, role: UserRole, isSubmitted: boolean, isVerified: boolean }> };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type ResendVerificationMailMutationVariables = Exact<{
  requestForgotPassInput: RequestForgotPassInput;
}>;


export type ResendVerificationMailMutation = { resendVerificationMail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type FillProjectMutationVariables = Exact<{
  ProjectInput: ProjectInput;
}>;


export type FillProjectMutation = { fillProject: boolean };

export type UpdateProjectMutationVariables = Exact<{
  ProjectInput: ProjectInput;
}>;


export type UpdateProjectMutation = { updateProject: boolean };

export type CreateTeamandRegisterMutationVariables = Exact<{
  createTeamAndRegisterData: CreateTeamInput;
}>;


export type CreateTeamandRegisterMutation = { createTeamAndRegister: boolean };

export type GetPasswordOtpMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetPasswordOtpMutation = { getPasswordOTP: boolean };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { getUsers?: Maybe<Array<{ id: string, name: string, email: string, isVerified: boolean, institution?: Maybe<string>, contactno?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, role: UserRole }>> };

export type GetTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsQuery = { getTeams: Array<{ id: string, name: string, project?: Maybe<{ id: string, title: string, category: string }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<{ id: string, isSubmitted: boolean, team?: Maybe<{ id: string, members: Array<{ name: string, email: string }> }> }> };

export type GetProjectbyteamIdQueryVariables = Exact<{
  teamid: Scalars['String'];
}>;


export type GetProjectbyteamIdQuery = { getProjectbyteamId: { id: string, title: string, category: string, Q1: string, Q2: string, Q3: string, Q4: string, Q5: string, Q6: string, Q7: string, videolink: string } };

export type GetTeamByIdQueryVariables = Exact<{
  teamid: Scalars['String'];
}>;


export type GetTeamByIdQuery = { getTeamById: { name: string, project?: Maybe<{ id: string, title: string, category: string, Q1: string, Q2: string, Q3: string, Q4: string, Q5: string, Q6: string, Q7: string, videolink: string }>, members: Array<{ name: string, email: string, contactno?: Maybe<string>, institution?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string> }> } };

export type ExportCsvQueryVariables = Exact<{ [key: string]: never; }>;


export type ExportCsvQuery = { exportCSV: string };


export const RegisterUserDocument = gql`
    mutation registerUser($CreateUserInput: CreateUserInput!) {
  registerUser(data: $CreateUserInput)
}
    `;
export type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      CreateUserInput: // value for 'CreateUserInput'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($otp: String!) {
  verifyUser(otp: $otp)
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($LoginInput: LoginInput!) {
  login(data: $LoginInput) {
    id
    role
    isSubmitted
    isVerified
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      LoginInput: // value for 'LoginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutUserDocument = gql`
    mutation logoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const ResendVerificationMailDocument = gql`
    mutation resendVerificationMail($requestForgotPassInput: RequestForgotPassInput!) {
  resendVerificationMail(data: $requestForgotPassInput)
}
    `;
export type ResendVerificationMailMutationFn = ApolloReactCommon.MutationFunction<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;

/**
 * __useResendVerificationMailMutation__
 *
 * To run a mutation, you first call `useResendVerificationMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationMailMutation, { data, loading, error }] = useResendVerificationMailMutation({
 *   variables: {
 *      requestForgotPassInput: // value for 'requestForgotPassInput'
 *   },
 * });
 */
export function useResendVerificationMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>(ResendVerificationMailDocument, options);
      }
export type ResendVerificationMailMutationHookResult = ReturnType<typeof useResendVerificationMailMutation>;
export type ResendVerificationMailMutationResult = ApolloReactCommon.MutationResult<ResendVerificationMailMutation>;
export type ResendVerificationMailMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(data: $resetPasswordInput)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const FillProjectDocument = gql`
    mutation fillProject($ProjectInput: ProjectInput!) {
  fillProject(data: $ProjectInput)
}
    `;
export type FillProjectMutationFn = ApolloReactCommon.MutationFunction<FillProjectMutation, FillProjectMutationVariables>;

/**
 * __useFillProjectMutation__
 *
 * To run a mutation, you first call `useFillProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFillProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fillProjectMutation, { data, loading, error }] = useFillProjectMutation({
 *   variables: {
 *      ProjectInput: // value for 'ProjectInput'
 *   },
 * });
 */
export function useFillProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FillProjectMutation, FillProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<FillProjectMutation, FillProjectMutationVariables>(FillProjectDocument, options);
      }
export type FillProjectMutationHookResult = ReturnType<typeof useFillProjectMutation>;
export type FillProjectMutationResult = ApolloReactCommon.MutationResult<FillProjectMutation>;
export type FillProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<FillProjectMutation, FillProjectMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation updateProject($ProjectInput: ProjectInput!) {
  updateProject(data: $ProjectInput)
}
    `;
export type UpdateProjectMutationFn = ApolloReactCommon.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      ProjectInput: // value for 'ProjectInput'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const CreateTeamandRegisterDocument = gql`
    mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!) {
  createTeamAndRegister(data: $createTeamAndRegisterData)
}
    `;
export type CreateTeamandRegisterMutationFn = ApolloReactCommon.MutationFunction<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;

/**
 * __useCreateTeamandRegisterMutation__
 *
 * To run a mutation, you first call `useCreateTeamandRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamandRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamandRegisterMutation, { data, loading, error }] = useCreateTeamandRegisterMutation({
 *   variables: {
 *      createTeamAndRegisterData: // value for 'createTeamAndRegisterData'
 *   },
 * });
 */
export function useCreateTeamandRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>(CreateTeamandRegisterDocument, options);
      }
export type CreateTeamandRegisterMutationHookResult = ReturnType<typeof useCreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationResult = ApolloReactCommon.MutationResult<CreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;
export const GetPasswordOtpDocument = gql`
    mutation getPasswordOTP($email: String!) {
  getPasswordOTP(email: $email)
}
    `;
export type GetPasswordOtpMutationFn = ApolloReactCommon.MutationFunction<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;

/**
 * __useGetPasswordOtpMutation__
 *
 * To run a mutation, you first call `useGetPasswordOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPasswordOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPasswordOtpMutation, { data, loading, error }] = useGetPasswordOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetPasswordOtpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>(GetPasswordOtpDocument, options);
      }
export type GetPasswordOtpMutationHookResult = ReturnType<typeof useGetPasswordOtpMutation>;
export type GetPasswordOtpMutationResult = ApolloReactCommon.MutationResult<GetPasswordOtpMutation>;
export type GetPasswordOtpMutationOptions = ApolloReactCommon.BaseMutationOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    name
    email
    isVerified
    institution
    contactno
    city
    state
    role
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const GetTeamsDocument = gql`
    query getTeams {
  getTeams {
    id
    name
    project {
      id
      title
      category
    }
  }
}
    `;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = ApolloReactCommon.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export function refetchGetTeamsQuery(variables?: GetTeamsQueryVariables) {
      return { query: GetTeamsDocument, variables: variables }
    }
export const MeDocument = gql`
    query me {
  me {
    id
    isSubmitted
    team {
      id
      members {
        name
        email
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const GetProjectbyteamIdDocument = gql`
    query getProjectbyteamId($teamid: String!) {
  getProjectbyteamId(teamid: $teamid) {
    id
    title
    category
    Q1
    Q2
    Q3
    Q4
    Q5
    Q6
    Q7
    videolink
  }
}
    `;

/**
 * __useGetProjectbyteamIdQuery__
 *
 * To run a query within a React component, call `useGetProjectbyteamIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectbyteamIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectbyteamIdQuery({
 *   variables: {
 *      teamid: // value for 'teamid'
 *   },
 * });
 */
export function useGetProjectbyteamIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetProjectbyteamIdQuery, GetProjectbyteamIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProjectbyteamIdQuery, GetProjectbyteamIdQueryVariables>(GetProjectbyteamIdDocument, options);
      }
export function useGetProjectbyteamIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProjectbyteamIdQuery, GetProjectbyteamIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProjectbyteamIdQuery, GetProjectbyteamIdQueryVariables>(GetProjectbyteamIdDocument, options);
        }
export type GetProjectbyteamIdQueryHookResult = ReturnType<typeof useGetProjectbyteamIdQuery>;
export type GetProjectbyteamIdLazyQueryHookResult = ReturnType<typeof useGetProjectbyteamIdLazyQuery>;
export type GetProjectbyteamIdQueryResult = ApolloReactCommon.QueryResult<GetProjectbyteamIdQuery, GetProjectbyteamIdQueryVariables>;
export function refetchGetProjectbyteamIdQuery(variables?: GetProjectbyteamIdQueryVariables) {
      return { query: GetProjectbyteamIdDocument, variables: variables }
    }
export const GetTeamByIdDocument = gql`
    query getTeamById($teamid: String!) {
  getTeamById(teamid: $teamid) {
    name
    project {
      id
      title
      category
      Q1
      Q2
      Q3
      Q4
      Q5
      Q6
      Q7
      videolink
    }
    members {
      name
      email
      contactno
      institution
      city
      state
    }
  }
}
    `;

/**
 * __useGetTeamByIdQuery__
 *
 * To run a query within a React component, call `useGetTeamByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamByIdQuery({
 *   variables: {
 *      teamid: // value for 'teamid'
 *   },
 * });
 */
export function useGetTeamByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTeamByIdQuery, GetTeamByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTeamByIdQuery, GetTeamByIdQueryVariables>(GetTeamByIdDocument, options);
      }
export function useGetTeamByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTeamByIdQuery, GetTeamByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTeamByIdQuery, GetTeamByIdQueryVariables>(GetTeamByIdDocument, options);
        }
export type GetTeamByIdQueryHookResult = ReturnType<typeof useGetTeamByIdQuery>;
export type GetTeamByIdLazyQueryHookResult = ReturnType<typeof useGetTeamByIdLazyQuery>;
export type GetTeamByIdQueryResult = ApolloReactCommon.QueryResult<GetTeamByIdQuery, GetTeamByIdQueryVariables>;
export function refetchGetTeamByIdQuery(variables?: GetTeamByIdQueryVariables) {
      return { query: GetTeamByIdDocument, variables: variables }
    }
export const ExportCsvDocument = gql`
    query exportCSV {
  exportCSV
}
    `;

/**
 * __useExportCsvQuery__
 *
 * To run a query within a React component, call `useExportCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportCsvQuery({
 *   variables: {
 *   },
 * });
 */
export function useExportCsvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
      }
export function useExportCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
        }
export type ExportCsvQueryHookResult = ReturnType<typeof useExportCsvQuery>;
export type ExportCsvLazyQueryHookResult = ReturnType<typeof useExportCsvLazyQuery>;
export type ExportCsvQueryResult = ApolloReactCommon.QueryResult<ExportCsvQuery, ExportCsvQueryVariables>;
export function refetchExportCsvQuery(variables?: ExportCsvQueryVariables) {
      return { query: ExportCsvDocument, variables: variables }
    }