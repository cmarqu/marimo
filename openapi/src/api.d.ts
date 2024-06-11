/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/@file/{filename_and_length}": {
    get: {
      parameters: {
        path: {
          /** @description The filename and byte length of the virtual file */
          filename_and_length: string;
        };
      };
      responses: {
        /** @description Get a virtual file */
        200: {
          content: {
            "application/octet-stream": string;
          };
        };
        /** @description Invalid byte length in virtual file request */
        404: {
          content: never;
        };
      };
    };
  };
  "/api/ai/completion": {
    post: {
      /** @description The prompt to get AI completion for */
      requestBody: {
        content: {
          "application/json": components["schemas"]["AiCompletionRequest"];
        };
      };
      responses: {
        /** @description Get AI completion for a prompt */
        200: {
          content: {
            "application/json": {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
  "/api/datasources/preview_column": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["PreviewDatasetColumnRequest"];
        };
      };
      responses: {
        /** @description Preview a column in a dataset */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/documentation/snippets": {
    get: {
      responses: {
        /** @description Load the snippets for the documentation page */
        200: {
          content: {
            "application/json": components["schemas"]["Snippets"];
          };
        };
      };
    };
  };
  "/api/export/html": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ExportAsHTMLRequest"];
        };
      };
      responses: {
        /** @description Export the notebook as HTML */
        200: {
          content: {
            "text/html": string;
          };
        };
        /** @description File must be saved before downloading */
        400: {
          content: never;
        };
      };
    };
  };
  "/api/export/markdown": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ExportAsMarkdownRequest"];
        };
      };
      responses: {
        /** @description Export the notebook as a markdown */
        200: {
          content: {
            "text/plain": string;
          };
        };
        /** @description File must be saved before downloading */
        400: {
          content: never;
        };
      };
    };
  };
  "/api/export/script": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ExportAsScriptRequest"];
        };
      };
      responses: {
        /** @description Export the notebook as a script */
        200: {
          content: {
            "text/plain": string;
          };
        };
        /** @description File must be saved before downloading */
        400: {
          content: never;
        };
      };
    };
  };
  "/api/files/create": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileCreateRequest"];
        };
      };
      responses: {
        /** @description Create a new file or directory */
        200: {
          content: {
            "application/json": components["schemas"]["FileCreateResponse"];
          };
        };
      };
    };
  };
  "/api/files/delete": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileDeleteRequest"];
        };
      };
      responses: {
        /** @description Delete a file or directory */
        200: {
          content: {
            "application/json": components["schemas"]["FileDeleteResponse"];
          };
        };
      };
    };
  };
  "/api/files/file_details": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileDetailsRequest"];
        };
      };
      responses: {
        /** @description Get details of a specific file or directory */
        200: {
          content: {
            "application/json": components["schemas"]["FileDetailsResponse"];
          };
        };
      };
    };
  };
  "/api/files/list_files": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileListRequest"];
        };
      };
      responses: {
        /** @description List files and directories in a given path */
        200: {
          content: {
            "application/json": components["schemas"]["FileListResponse"];
          };
        };
      };
    };
  };
  "/api/files/move": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileMoveRequest"];
        };
      };
      responses: {
        /** @description Move a file or directory */
        200: {
          content: {
            "application/json": components["schemas"]["FileMoveResponse"];
          };
        };
      };
    };
  };
  "/api/files/update": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FileUpdateRequest"];
        };
      };
      responses: {
        /** @description Update a file or directory */
        200: {
          content: {
            "application/json": components["schemas"]["FileUpdateResponse"];
          };
        };
      };
    };
  };
  "/api/home/recent_files": {
    post: {
      responses: {
        /** @description Get the recent files */
        200: {
          content: {
            "application/json": components["schemas"]["RecentFilesResponse"];
          };
        };
      };
    };
  };
  "/api/home/running_notebooks": {
    post: {
      responses: {
        /** @description Get the running files */
        200: {
          content: {
            "application/json": components["schemas"]["WorkspaceFilesResponse"];
          };
        };
      };
    };
  };
  "/api/home/shutdown_session": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ShutdownSessionRequest"];
        };
      };
      responses: {
        /** @description Shutdown the current session */
        200: {
          content: {
            "application/json": components["schemas"]["WorkspaceFilesResponse"];
          };
        };
      };
    };
  };
  "/api/home/workspace_files": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["WorkspaceFilesRequest"];
        };
      };
      responses: {
        /** @description Get the files in the workspace */
        200: {
          content: {
            "application/json": components["schemas"]["WorkspaceFilesResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/code_autocomplete": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["CompletionRequest"];
        };
      };
      responses: {
        /** @description Complete a code fragment */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/delete": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["DeleteRequest"];
        };
      };
      responses: {
        /** @description Delete a cell */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/format": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FormatRequest"];
        };
      };
      responses: {
        /** @description Format code */
        200: {
          content: {
            "application/json": components["schemas"]["FormatResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/function_call": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["FunctionCallRequest"];
        };
      };
      responses: {
        /** @description Invoke an RPC */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/install_missing_packages": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["InstallMissingPackagesRequest"];
        };
      };
      responses: {
        /** @description Install missing packages */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/instantiate": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["InstantiateRequest"];
        };
      };
      responses: {
        /** @description Instantiate a component */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/interrupt": {
    post: {
      responses: {
        /** @description Interrupt the kernel's execution */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/open": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["OpenFileRequest"];
        };
      };
      responses: {
        /** @description Open a file */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
        /** @description File does not exist */
        400: {
          content: never;
        };
      };
    };
  };
  "/api/kernel/read_code": {
    post: {
      responses: {
        /** @description Read the code from the server */
        200: {
          content: {
            "application/json": components["schemas"]["ReadCodeResponse"];
          };
        };
        /** @description File must be saved before downloading */
        400: {
          content: never;
        };
      };
    };
  };
  "/api/kernel/rename": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["RenameFileRequest"];
        };
      };
      responses: {
        /** @description Rename the current app */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/restart_session": {
    post: {
      responses: {
        /** @description Restart the current session without affecting other sessions. */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/run": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["RunRequest"];
        };
      };
      responses: {
        /** @description Run a cell. Updates cell code in the kernel if needed; registers new cells for unseen cell IDs. Only allowed in edit mode. */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/save": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["SaveRequest"];
        };
      };
      responses: {
        /** @description Save the current app */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/save_app_config": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["SaveAppConfigurationRequest"];
        };
      };
      responses: {
        /** @description Save the app configuration */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/save_user_config": {
    post: {
      responses: {
        /** @description Update the user config on disk and in the kernel. Only allowed in edit mode. */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/set_cell_config": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["SetCellConfigRequest"];
        };
      };
      responses: {
        /** @description Set the configuration of a cell */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/set_ui_element_value": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["UpdateComponentValuesRequest"];
        };
      };
      responses: {
        /** @description Set UI element values */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/shutdown": {
    post: {
      responses: {
        /** @description Shutdown the kernel */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/kernel/stdin": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["StdinRequest"];
        };
      };
      responses: {
        /** @description Send input to the stdin stream */
        200: {
          content: {
            "application/json": components["schemas"]["SuccessResponse"];
          };
        };
      };
    };
  };
  "/api/status": {
    get: {
      responses: {
        /** @description Get the status of the application */
        200: {
          content: {
            "application/json": {
              filenames?: string[];
              lsp_running?: boolean;
              mode?: string;
              node_version?: string;
              requirements?: string[];
              sessions?: number;
              status?: string;
              version?: string;
            };
          };
        };
      };
    };
  };
  "/api/usage": {
    get: {
      responses: {
        /** @description Get the current memory and CPU usage of the application */
        200: {
          content: {
            "application/json": {
              cpu?: {
                percent?: number;
              };
              memory?: {
                available?: number;
                free?: number;
                percent?: number;
                total?: number;
                used?: number;
              };
            };
          };
        };
      };
    };
  };
  "/api/version": {
    get: {
      responses: {
        /** @description Get the version of the application */
        200: {
          content: {
            "text/plain": string;
          };
        };
      };
    };
  };
  "/auth/login": {
    /** Submit login form */
    post: {
      requestBody?: {
        content: {
          "application/x-www-form-urlencoded": {
            /** @description Access token or password */
            password?: string;
          };
        };
      };
      responses: {
        /** @description Login page */
        200: {
          content: {
            "text/html": string;
          };
        };
        /** @description Redirect to the next URL */
        302: {
          headers: {
            Location?: string;
          };
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AiCompletionRequest: {
      code: string;
      include_other_code: string;
      prompt: string;
    };
    AppMetadata: {
      cli_args: {
        [key: string]:
          | string
          | boolean
          | number
          | (string | boolean | number)[];
      };
      filename?: string | null;
      query_params: {
        [key: string]: string | string[];
      };
    };
    BaseResponse: {
      success: boolean;
    };
    CellConfig: {
      disabled?: boolean;
      hide_code?: boolean;
    };
    CompletionRequest: {
      cell_id: string;
      document: string;
      id: string;
    };
    CreationRequest: {
      execution_requests: components["schemas"]["ExecutionRequest"][];
      set_ui_element_value_request: {
        ids_and_values: [string, unknown][];
        token?: string;
      };
    };
    DeleteRequest: {
      cell_id: string;
    };
    ExecuteMultipleRequest: {
      execution_requests: components["schemas"]["ExecutionRequest"][];
    };
    ExecuteStaleRequest: Record<string, never>;
    ExecutionRequest: {
      cell_id: string;
      code: string;
    };
    ExportAsHTMLRequest: {
      asset_url?: string | null;
      download: boolean;
      files: string[];
      include_code: boolean;
    };
    ExportAsMarkdownRequest: {
      download: boolean;
    };
    ExportAsScriptRequest: {
      download: boolean;
    };
    FileCreateRequest: {
      contents?: string | null;
      name: string;
      path: string;
      type: string;
    };
    FileCreateResponse: {
      info?: components["schemas"]["FileInfo"];
      message?: string | null;
      success: boolean;
    };
    FileDeleteRequest: {
      path: string;
    };
    FileDeleteResponse: {
      message?: string | null;
      success: boolean;
    };
    FileDetailsRequest: {
      path: string;
    };
    FileDetailsResponse: {
      contents?: string | null;
      file: components["schemas"]["FileInfo"];
      mime_type?: string | null;
    };
    FileInfo: {
      children?: components["schemas"]["FileInfo"][];
      id: string;
      is_directory: boolean;
      is_marimo_file: boolean;
      last_modified_date?: number | null;
      name: string;
      path: string;
    };
    FileListRequest: {
      path?: string | null;
    };
    FileListResponse: {
      files: components["schemas"]["FileInfo"][];
      root: string;
    };
    FileMoveRequest: {
      new_path: string;
      path: string;
    };
    FileMoveResponse: {
      info?: components["schemas"]["FileInfo"];
      message?: string | null;
      success: boolean;
    };
    FileUpdateRequest: {
      contents: string;
      path: string;
    };
    FileUpdateResponse: {
      info?: components["schemas"]["FileInfo"];
      message?: string | null;
      success: boolean;
    };
    FormatRequest: {
      codes: {
        [key: string]: string;
      };
      line_length: number;
    };
    FormatResponse: {
      codes: {
        [key: string]: string;
      };
    };
    FunctionCallRequest: {
      args: {
        [key: string]: unknown;
      };
      function_call_id: string;
      function_name: string;
      namespace: string;
    };
    InstallMissingPackagesRequest: {
      manager: string;
    };
    InstantiateRequest: {
      object_ids: string[];
      values: (string | boolean | number | null)[];
    };
    MarimoConfig: {
      ai: {
        open_ai: {
          api_key: string;
          base_url: string;
          model: string;
        };
      };
      completion: {
        activate_on_typing: boolean;
        copilot: boolean;
      };
      display: {
        /** @enum {unknown} */
        cell_output: "above" | "below";
        code_editor_font_size: number;
        /** @enum {unknown} */
        default_width: "normal" | "compact" | "medium" | "full";
        /** @enum {unknown} */
        theme: "light" | "dark" | "system";
      };
      experimental: {
        [key: string]: unknown;
      };
      formatting: {
        line_length: number;
      };
      keymap: {
        overrides: {
          [key: string]: string;
        };
        /** @enum {unknown} */
        preset: "default" | "vim";
      };
      package_management: {
        /** @enum {unknown} */
        manager: "pip" | "rye" | "uv" | "poetry" | "pixi";
      };
      runtime: {
        auto_instantiate: boolean;
        /** @enum {unknown} */
        auto_reload: "off" | "lazy" | "autorun";
        /** @enum {unknown} */
        on_cell_change: "lazy" | "autorun";
      };
      save: {
        /** @enum {unknown} */
        autosave: "off" | "after_delay";
        autosave_delay: number;
        format_on_save: boolean;
      };
      server: {
        browser: "default" | string;
        follow_symlink: boolean;
      };
    };
    MarimoFile: {
      initialization_id?: string | null;
      last_modified: number;
      name: string;
      path: string;
      session_id?: string | null;
    };
    OpenFileRequest: {
      path: string;
    };
    PreviewDatasetColumnRequest: {
      column_name: string;
      source: string;
      table_name: string;
    };
    ReadCodeResponse: {
      contents: string;
    };
    RecentFilesResponse: {
      files: components["schemas"]["MarimoFile"][];
    };
    RenameFileRequest: {
      filename: string;
    };
    RunRequest: {
      cell_ids: string[];
      codes: string[];
    };
    SaveAppConfigurationRequest: {
      config: {
        [key: string]: unknown;
      };
    };
    SaveRequest: {
      cell_ids: string[];
      codes: string[];
      configs: components["schemas"]["CellConfig"][];
      filename: string;
      layout?: {
        [key: string]: unknown;
      } | null;
      names: string[];
    };
    SaveUserConfigurationRequest: {
      config: components["schemas"]["MarimoConfig"];
    };
    SetCellConfigRequest: {
      configs: {
        [key: string]: {
          [key: string]: {
            [key: string]: unknown;
          };
        };
      };
    };
    SetUIElementValueRequest: {
      ids_and_values: [string, unknown][];
      token?: string;
    };
    SetUserConfigRequest: {
      config: components["schemas"]["MarimoConfig"];
    };
    ShutdownSessionRequest: {
      session_id: string;
    };
    Snippet: {
      sections: components["schemas"]["SnippetSection"][];
      title: string;
    };
    SnippetSection: {
      code?: string | null;
      html?: string | null;
      id: string;
    };
    Snippets: {
      snippets: components["schemas"]["Snippet"][];
    };
    StdinRequest: {
      text: string;
    };
    StopRequest: Record<string, never>;
    SuccessResponse: {
      success?: boolean;
    };
    UpdateComponentValuesRequest: {
      object_ids: string[];
      values: (string | boolean | number | null)[];
    };
    WorkspaceFilesRequest: {
      include_markdown?: boolean;
    };
    WorkspaceFilesResponse: {
      files: components["schemas"]["MarimoFile"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
